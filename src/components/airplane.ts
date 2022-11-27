import { KRPC } from "../services/krpc";
import { conn } from "../services/connection";
import {
  CelestialBody,
  Control,
  Flight,
  ReferenceFrame,
  SpaceCenter,
  Vessel,
} from "../generated/services/space-center";

import ByteBuffer from "bytebuffer";

ByteBuffer.DEFAULT_ENDIAN = true;

export class Airplane {
  krpc?: KRPC;
  spaceCenter?: SpaceCenter;
  activeVessel?: Vessel;
  body?: CelestialBody;
  referenceFrame?: ReferenceFrame;
  flight?: Flight;
  control?: Control;

  async init() {
    this.krpc = new KRPC(conn);
    const status = await this.krpc.getStatus();
    console.log(status.version);
    this.spaceCenter = new SpaceCenter(conn);
    this.activeVessel = await this.spaceCenter.getActiveVessel();
    console.log(this.activeVessel);

    this.body = await (await this.activeVessel.getOrbit()).getBody();
    const bodyReferenceFrame = await this.body.getReferenceFrame();
    const surfaceReferenceFrame =
      await this.activeVessel.getSurfaceReferenceFrame();
    this.referenceFrame = await ReferenceFrame.createHybrid(
      conn,
      bodyReferenceFrame,
      surfaceReferenceFrame
    );
    this.flight = await this.activeVessel.flight(this.referenceFrame);

    this.control = await this.activeVessel.getControl();
    console.log(this.control);
  }
}
