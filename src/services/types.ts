import { KRPCConnection } from "./connection";
import Long from "long";

export abstract class KerbalClass {
  constructor(conn: KRPCConnection, id: Long) {}
}
