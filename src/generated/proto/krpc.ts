/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "krpc.schema";

export interface ConnectionRequest {
  type: ConnectionRequest_Type;
  clientName: string;
  clientIdentifier: Uint8Array;
}

export enum ConnectionRequest_Type {
  RPC = 0,
  STREAM = 1,
  UNRECOGNIZED = -1,
}

export function connectionRequest_TypeFromJSON(
  object: any
): ConnectionRequest_Type {
  switch (object) {
    case 0:
    case "RPC":
      return ConnectionRequest_Type.RPC;
    case 1:
    case "STREAM":
      return ConnectionRequest_Type.STREAM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionRequest_Type.UNRECOGNIZED;
  }
}

export function connectionRequest_TypeToJSON(
  object: ConnectionRequest_Type
): string {
  switch (object) {
    case ConnectionRequest_Type.RPC:
      return "RPC";
    case ConnectionRequest_Type.STREAM:
      return "STREAM";
    case ConnectionRequest_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ConnectionResponse {
  status: ConnectionResponse_Status;
  message: string;
  clientIdentifier: Uint8Array;
}

export enum ConnectionResponse_Status {
  OK = 0,
  MALFORMED_MESSAGE = 1,
  TIMEOUT = 2,
  WRONG_TYPE = 3,
  UNRECOGNIZED = -1,
}

export function connectionResponse_StatusFromJSON(
  object: any
): ConnectionResponse_Status {
  switch (object) {
    case 0:
    case "OK":
      return ConnectionResponse_Status.OK;
    case 1:
    case "MALFORMED_MESSAGE":
      return ConnectionResponse_Status.MALFORMED_MESSAGE;
    case 2:
    case "TIMEOUT":
      return ConnectionResponse_Status.TIMEOUT;
    case 3:
    case "WRONG_TYPE":
      return ConnectionResponse_Status.WRONG_TYPE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ConnectionResponse_Status.UNRECOGNIZED;
  }
}

export function connectionResponse_StatusToJSON(
  object: ConnectionResponse_Status
): string {
  switch (object) {
    case ConnectionResponse_Status.OK:
      return "OK";
    case ConnectionResponse_Status.MALFORMED_MESSAGE:
      return "MALFORMED_MESSAGE";
    case ConnectionResponse_Status.TIMEOUT:
      return "TIMEOUT";
    case ConnectionResponse_Status.WRONG_TYPE:
      return "WRONG_TYPE";
    case ConnectionResponse_Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Request {
  calls: ProcedureCall[];
}

export interface ProcedureCall {
  service: string;
  procedure: string;
  serviceId: number;
  procedureId: number;
  arguments: Argument[];
}

export interface Argument {
  position: number;
  value: Uint8Array;
}

export interface Response {
  error: Error | undefined;
  results: ProcedureResult[];
}

export interface ProcedureResult {
  error: Error | undefined;
  value: Uint8Array;
}

export interface Error {
  service: string;
  name: string;
  description: string;
  stackTrace: string;
}

export interface StreamUpdate {
  results: StreamResult[];
}

export interface StreamResult {
  id: number;
  result: ProcedureResult | undefined;
}

export interface Services {
  services: Service[];
}

export interface Service {
  name: string;
  procedures: Procedure[];
  classes: Class[];
  enumerations: Enumeration[];
  exceptions: Exception[];
  documentation: string;
}

export interface Procedure {
  name: string;
  parameters: Parameter[];
  returnType: Type | undefined;
  returnIsNullable: boolean;
  gameScenes: Procedure_GameScene[];
  documentation: string;
}

export enum Procedure_GameScene {
  SPACE_CENTER = 0,
  FLIGHT = 1,
  TRACKING_STATION = 2,
  EDITOR_VAB = 3,
  EDITOR_SPH = 4,
  MISSION_BUILDER = 5,
  UNRECOGNIZED = -1,
}

export function procedure_GameSceneFromJSON(object: any): Procedure_GameScene {
  switch (object) {
    case 0:
    case "SPACE_CENTER":
      return Procedure_GameScene.SPACE_CENTER;
    case 1:
    case "FLIGHT":
      return Procedure_GameScene.FLIGHT;
    case 2:
    case "TRACKING_STATION":
      return Procedure_GameScene.TRACKING_STATION;
    case 3:
    case "EDITOR_VAB":
      return Procedure_GameScene.EDITOR_VAB;
    case 4:
    case "EDITOR_SPH":
      return Procedure_GameScene.EDITOR_SPH;
    case 5:
    case "MISSION_BUILDER":
      return Procedure_GameScene.MISSION_BUILDER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Procedure_GameScene.UNRECOGNIZED;
  }
}

export function procedure_GameSceneToJSON(object: Procedure_GameScene): string {
  switch (object) {
    case Procedure_GameScene.SPACE_CENTER:
      return "SPACE_CENTER";
    case Procedure_GameScene.FLIGHT:
      return "FLIGHT";
    case Procedure_GameScene.TRACKING_STATION:
      return "TRACKING_STATION";
    case Procedure_GameScene.EDITOR_VAB:
      return "EDITOR_VAB";
    case Procedure_GameScene.EDITOR_SPH:
      return "EDITOR_SPH";
    case Procedure_GameScene.MISSION_BUILDER:
      return "MISSION_BUILDER";
    case Procedure_GameScene.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Parameter {
  name: string;
  type: Type | undefined;
  defaultValue: Uint8Array;
}

export interface Class {
  name: string;
  documentation: string;
}

export interface Enumeration {
  name: string;
  values: EnumerationValue[];
  documentation: string;
}

export interface EnumerationValue {
  name: string;
  value: number;
  documentation: string;
}

export interface Exception {
  name: string;
  documentation: string;
}

export interface Type {
  code: Type_TypeCode;
  service: string;
  name: string;
  types: Type[];
}

export enum Type_TypeCode {
  NONE = 0,
  /** DOUBLE - Values */
  DOUBLE = 1,
  FLOAT = 2,
  SINT32 = 3,
  SINT64 = 4,
  UINT32 = 5,
  UINT64 = 6,
  BOOL = 7,
  STRING = 8,
  BYTES = 9,
  /** CLASS - Objects */
  CLASS = 100,
  ENUMERATION = 101,
  /** EVENT - Messages */
  EVENT = 200,
  PROCEDURE_CALL = 201,
  STREAM = 202,
  STATUS = 203,
  SERVICES = 204,
  /** TUPLE - Collections */
  TUPLE = 300,
  LIST = 301,
  SET = 302,
  DICTIONARY = 303,
  UNRECOGNIZED = -1,
}

export function type_TypeCodeFromJSON(object: any): Type_TypeCode {
  switch (object) {
    case 0:
    case "NONE":
      return Type_TypeCode.NONE;
    case 1:
    case "DOUBLE":
      return Type_TypeCode.DOUBLE;
    case 2:
    case "FLOAT":
      return Type_TypeCode.FLOAT;
    case 3:
    case "SINT32":
      return Type_TypeCode.SINT32;
    case 4:
    case "SINT64":
      return Type_TypeCode.SINT64;
    case 5:
    case "UINT32":
      return Type_TypeCode.UINT32;
    case 6:
    case "UINT64":
      return Type_TypeCode.UINT64;
    case 7:
    case "BOOL":
      return Type_TypeCode.BOOL;
    case 8:
    case "STRING":
      return Type_TypeCode.STRING;
    case 9:
    case "BYTES":
      return Type_TypeCode.BYTES;
    case 100:
    case "CLASS":
      return Type_TypeCode.CLASS;
    case 101:
    case "ENUMERATION":
      return Type_TypeCode.ENUMERATION;
    case 200:
    case "EVENT":
      return Type_TypeCode.EVENT;
    case 201:
    case "PROCEDURE_CALL":
      return Type_TypeCode.PROCEDURE_CALL;
    case 202:
    case "STREAM":
      return Type_TypeCode.STREAM;
    case 203:
    case "STATUS":
      return Type_TypeCode.STATUS;
    case 204:
    case "SERVICES":
      return Type_TypeCode.SERVICES;
    case 300:
    case "TUPLE":
      return Type_TypeCode.TUPLE;
    case 301:
    case "LIST":
      return Type_TypeCode.LIST;
    case 302:
    case "SET":
      return Type_TypeCode.SET;
    case 303:
    case "DICTIONARY":
      return Type_TypeCode.DICTIONARY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type_TypeCode.UNRECOGNIZED;
  }
}

export function type_TypeCodeToJSON(object: Type_TypeCode): string {
  switch (object) {
    case Type_TypeCode.NONE:
      return "NONE";
    case Type_TypeCode.DOUBLE:
      return "DOUBLE";
    case Type_TypeCode.FLOAT:
      return "FLOAT";
    case Type_TypeCode.SINT32:
      return "SINT32";
    case Type_TypeCode.SINT64:
      return "SINT64";
    case Type_TypeCode.UINT32:
      return "UINT32";
    case Type_TypeCode.UINT64:
      return "UINT64";
    case Type_TypeCode.BOOL:
      return "BOOL";
    case Type_TypeCode.STRING:
      return "STRING";
    case Type_TypeCode.BYTES:
      return "BYTES";
    case Type_TypeCode.CLASS:
      return "CLASS";
    case Type_TypeCode.ENUMERATION:
      return "ENUMERATION";
    case Type_TypeCode.EVENT:
      return "EVENT";
    case Type_TypeCode.PROCEDURE_CALL:
      return "PROCEDURE_CALL";
    case Type_TypeCode.STREAM:
      return "STREAM";
    case Type_TypeCode.STATUS:
      return "STATUS";
    case Type_TypeCode.SERVICES:
      return "SERVICES";
    case Type_TypeCode.TUPLE:
      return "TUPLE";
    case Type_TypeCode.LIST:
      return "LIST";
    case Type_TypeCode.SET:
      return "SET";
    case Type_TypeCode.DICTIONARY:
      return "DICTIONARY";
    case Type_TypeCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Tuple {
  items: Uint8Array[];
}

export interface List {
  items: Uint8Array[];
}

export interface Set {
  items: Uint8Array[];
}

export interface Dictionary {
  entries: DictionaryEntry[];
}

export interface DictionaryEntry {
  key: Uint8Array;
  value: Uint8Array;
}

export interface Stream {
  id: number;
}

export interface Event {
  stream: Stream | undefined;
}

export interface Status {
  version: string;
  bytesRead: number;
  bytesWritten: number;
  bytesReadRate: number;
  bytesWrittenRate: number;
  rpcsExecuted: number;
  rpcRate: number;
  oneRpcPerUpdate: boolean;
  maxTimePerUpdate: number;
  adaptiveRateControl: boolean;
  blockingRecv: boolean;
  recvTimeout: number;
  timePerRpcUpdate: number;
  pollTimePerRpcUpdate: number;
  execTimePerRpcUpdate: number;
  streamRpcs: number;
  streamRpcsExecuted: number;
  streamRpcRate: number;
  timePerStreamUpdate: number;
}

export interface MultiplexedRequest {
  connectionRequest: ConnectionRequest | undefined;
  request: Request | undefined;
}

export interface MultiplexedResponse {
  response: Response | undefined;
  streamUpdate: StreamUpdate | undefined;
}

function createBaseConnectionRequest(): ConnectionRequest {
  return { type: 0, clientName: "", clientIdentifier: new Uint8Array() };
}

export const ConnectionRequest = {
  encode(
    message: ConnectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.clientName !== "") {
      writer.uint32(18).string(message.clientName);
    }
    if (message.clientIdentifier.length !== 0) {
      writer.uint32(26).bytes(message.clientIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.clientName = reader.string();
          break;
        case 3:
          message.clientIdentifier = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectionRequest {
    return {
      type: isSet(object.type)
        ? connectionRequest_TypeFromJSON(object.type)
        : 0,
      clientName: isSet(object.clientName) ? String(object.clientName) : "",
      clientIdentifier: isSet(object.clientIdentifier)
        ? bytesFromBase64(object.clientIdentifier)
        : new Uint8Array(),
    };
  },

  toJSON(message: ConnectionRequest): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = connectionRequest_TypeToJSON(message.type));
    message.clientName !== undefined && (obj.clientName = message.clientName);
    message.clientIdentifier !== undefined &&
      (obj.clientIdentifier = base64FromBytes(
        message.clientIdentifier !== undefined
          ? message.clientIdentifier
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionRequest>, I>>(
    object: I
  ): ConnectionRequest {
    const message = createBaseConnectionRequest();
    message.type = object.type ?? 0;
    message.clientName = object.clientName ?? "";
    message.clientIdentifier = object.clientIdentifier ?? new Uint8Array();
    return message;
  },
};

function createBaseConnectionResponse(): ConnectionResponse {
  return { status: 0, message: "", clientIdentifier: new Uint8Array() };
}

export const ConnectionResponse = {
  encode(
    message: ConnectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.clientIdentifier.length !== 0) {
      writer.uint32(26).bytes(message.clientIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.message = reader.string();
          break;
        case 3:
          message.clientIdentifier = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConnectionResponse {
    return {
      status: isSet(object.status)
        ? connectionResponse_StatusFromJSON(object.status)
        : 0,
      message: isSet(object.message) ? String(object.message) : "",
      clientIdentifier: isSet(object.clientIdentifier)
        ? bytesFromBase64(object.clientIdentifier)
        : new Uint8Array(),
    };
  },

  toJSON(message: ConnectionResponse): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = connectionResponse_StatusToJSON(message.status));
    message.message !== undefined && (obj.message = message.message);
    message.clientIdentifier !== undefined &&
      (obj.clientIdentifier = base64FromBytes(
        message.clientIdentifier !== undefined
          ? message.clientIdentifier
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConnectionResponse>, I>>(
    object: I
  ): ConnectionResponse {
    const message = createBaseConnectionResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    message.clientIdentifier = object.clientIdentifier ?? new Uint8Array();
    return message;
  },
};

function createBaseRequest(): Request {
  return { calls: [] };
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.calls) {
      ProcedureCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calls.push(ProcedureCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      calls: Array.isArray(object?.calls)
        ? object.calls.map((e: any) => ProcedureCall.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.calls) {
      obj.calls = message.calls.map((e) =>
        e ? ProcedureCall.toJSON(e) : undefined
      );
    } else {
      obj.calls = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.calls =
      object.calls?.map((e) => ProcedureCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProcedureCall(): ProcedureCall {
  return {
    service: "",
    procedure: "",
    serviceId: 0,
    procedureId: 0,
    arguments: [],
  };
}

export const ProcedureCall = {
  encode(
    message: ProcedureCall,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.procedure !== "") {
      writer.uint32(18).string(message.procedure);
    }
    if (message.serviceId !== 0) {
      writer.uint32(32).uint32(message.serviceId);
    }
    if (message.procedureId !== 0) {
      writer.uint32(40).uint32(message.procedureId);
    }
    for (const v of message.arguments) {
      Argument.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureCall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcedureCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.procedure = reader.string();
          break;
        case 4:
          message.serviceId = reader.uint32();
          break;
        case 5:
          message.procedureId = reader.uint32();
          break;
        case 3:
          message.arguments.push(Argument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcedureCall {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      procedure: isSet(object.procedure) ? String(object.procedure) : "",
      serviceId: isSet(object.serviceId) ? Number(object.serviceId) : 0,
      procedureId: isSet(object.procedureId) ? Number(object.procedureId) : 0,
      arguments: Array.isArray(object?.arguments)
        ? object.arguments.map((e: any) => Argument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProcedureCall): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.procedure !== undefined && (obj.procedure = message.procedure);
    message.serviceId !== undefined &&
      (obj.serviceId = Math.round(message.serviceId));
    message.procedureId !== undefined &&
      (obj.procedureId = Math.round(message.procedureId));
    if (message.arguments) {
      obj.arguments = message.arguments.map((e) =>
        e ? Argument.toJSON(e) : undefined
      );
    } else {
      obj.arguments = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcedureCall>, I>>(
    object: I
  ): ProcedureCall {
    const message = createBaseProcedureCall();
    message.service = object.service ?? "";
    message.procedure = object.procedure ?? "";
    message.serviceId = object.serviceId ?? 0;
    message.procedureId = object.procedureId ?? 0;
    message.arguments =
      object.arguments?.map((e) => Argument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseArgument(): Argument {
  return { position: 0, value: new Uint8Array() };
}

export const Argument = {
  encode(
    message: Argument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.position !== 0) {
      writer.uint32(8).uint32(message.position);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Argument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArgument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.position = reader.uint32();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Argument {
    return {
      position: isSet(object.position) ? Number(object.position) : 0,
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: Argument): unknown {
    const obj: any = {};
    message.position !== undefined &&
      (obj.position = Math.round(message.position));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Argument>, I>>(object: I): Argument {
    const message = createBaseArgument();
    message.position = object.position ?? 0;
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseResponse(): Response {
  return { error: undefined, results: [] };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.results) {
      ProcedureResult.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 2:
          message.results.push(ProcedureResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => ProcedureResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? ProcedureResult.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
    message.results =
      object.results?.map((e) => ProcedureResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProcedureResult(): ProcedureResult {
  return { error: undefined, value: new Uint8Array() };
}

export const ProcedureResult = {
  encode(
    message: ProcedureResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== undefined) {
      Error.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProcedureResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcedureResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = Error.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProcedureResult {
    return {
      error: isSet(object.error) ? Error.fromJSON(object.error) : undefined,
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: ProcedureResult): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = message.error ? Error.toJSON(message.error) : undefined);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProcedureResult>, I>>(
    object: I
  ): ProcedureResult {
    const message = createBaseProcedureResult();
    message.error =
      object.error !== undefined && object.error !== null
        ? Error.fromPartial(object.error)
        : undefined;
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseError(): Error {
  return { service: "", name: "", description: "", stackTrace: "" };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.stackTrace !== "") {
      writer.uint32(34).string(message.stackTrace);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.stackTrace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      stackTrace: isSet(object.stackTrace) ? String(object.stackTrace) : "",
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.stackTrace !== undefined && (obj.stackTrace = message.stackTrace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.service = object.service ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.stackTrace = object.stackTrace ?? "";
    return message;
  },
};

function createBaseStreamUpdate(): StreamUpdate {
  return { results: [] };
}

export const StreamUpdate = {
  encode(
    message: StreamUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.results) {
      StreamResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(StreamResult.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamUpdate {
    return {
      results: Array.isArray(object?.results)
        ? object.results.map((e: any) => StreamResult.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StreamUpdate): unknown {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map((e) =>
        e ? StreamResult.toJSON(e) : undefined
      );
    } else {
      obj.results = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamUpdate>, I>>(
    object: I
  ): StreamUpdate {
    const message = createBaseStreamUpdate();
    message.results =
      object.results?.map((e) => StreamResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseStreamResult(): StreamResult {
  return { id: 0, result: undefined };
}

export const StreamResult = {
  encode(
    message: StreamResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.result !== undefined) {
      ProcedureResult.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.result = ProcedureResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamResult {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      result: isSet(object.result)
        ? ProcedureResult.fromJSON(object.result)
        : undefined,
    };
  },

  toJSON(message: StreamResult): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.result !== undefined &&
      (obj.result = message.result
        ? ProcedureResult.toJSON(message.result)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StreamResult>, I>>(
    object: I
  ): StreamResult {
    const message = createBaseStreamResult();
    message.id = object.id ?? 0;
    message.result =
      object.result !== undefined && object.result !== null
        ? ProcedureResult.fromPartial(object.result)
        : undefined;
    return message;
  },
};

function createBaseServices(): Services {
  return { services: [] };
}

export const Services = {
  encode(
    message: Services,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Services {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Services {
    return {
      services: Array.isArray(object?.services)
        ? object.services.map((e: any) => Service.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Services): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Services>, I>>(object: I): Services {
    const message = createBaseServices();
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    return message;
  },
};

function createBaseService(): Service {
  return {
    name: "",
    procedures: [],
    classes: [],
    enumerations: [],
    exceptions: [],
    documentation: "",
  };
}

export const Service = {
  encode(
    message: Service,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.procedures) {
      Procedure.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.enumerations) {
      Enumeration.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.exceptions) {
      Exception.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.documentation !== "") {
      writer.uint32(50).string(message.documentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.procedures.push(Procedure.decode(reader, reader.uint32()));
          break;
        case 3:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 4:
          message.enumerations.push(
            Enumeration.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.exceptions.push(Exception.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      procedures: Array.isArray(object?.procedures)
        ? object.procedures.map((e: any) => Procedure.fromJSON(e))
        : [],
      classes: Array.isArray(object?.classes)
        ? object.classes.map((e: any) => Class.fromJSON(e))
        : [],
      enumerations: Array.isArray(object?.enumerations)
        ? object.enumerations.map((e: any) => Enumeration.fromJSON(e))
        : [],
      exceptions: Array.isArray(object?.exceptions)
        ? object.exceptions.map((e: any) => Exception.fromJSON(e))
        : [],
      documentation: isSet(object.documentation)
        ? String(object.documentation)
        : "",
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.procedures) {
      obj.procedures = message.procedures.map((e) =>
        e ? Procedure.toJSON(e) : undefined
      );
    } else {
      obj.procedures = [];
    }
    if (message.classes) {
      obj.classes = message.classes.map((e) =>
        e ? Class.toJSON(e) : undefined
      );
    } else {
      obj.classes = [];
    }
    if (message.enumerations) {
      obj.enumerations = message.enumerations.map((e) =>
        e ? Enumeration.toJSON(e) : undefined
      );
    } else {
      obj.enumerations = [];
    }
    if (message.exceptions) {
      obj.exceptions = message.exceptions.map((e) =>
        e ? Exception.toJSON(e) : undefined
      );
    } else {
      obj.exceptions = [];
    }
    message.documentation !== undefined &&
      (obj.documentation = message.documentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.procedures =
      object.procedures?.map((e) => Procedure.fromPartial(e)) || [];
    message.classes = object.classes?.map((e) => Class.fromPartial(e)) || [];
    message.enumerations =
      object.enumerations?.map((e) => Enumeration.fromPartial(e)) || [];
    message.exceptions =
      object.exceptions?.map((e) => Exception.fromPartial(e)) || [];
    message.documentation = object.documentation ?? "";
    return message;
  },
};

function createBaseProcedure(): Procedure {
  return {
    name: "",
    parameters: [],
    returnType: undefined,
    returnIsNullable: false,
    gameScenes: [],
    documentation: "",
  };
}

export const Procedure = {
  encode(
    message: Procedure,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnType !== undefined) {
      Type.encode(message.returnType, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnIsNullable === true) {
      writer.uint32(32).bool(message.returnIsNullable);
    }
    writer.uint32(50).fork();
    for (const v of message.gameScenes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.documentation !== "") {
      writer.uint32(42).string(message.documentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Procedure {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProcedure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.parameters.push(Parameter.decode(reader, reader.uint32()));
          break;
        case 3:
          message.returnType = Type.decode(reader, reader.uint32());
          break;
        case 4:
          message.returnIsNullable = reader.bool();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.gameScenes.push(reader.int32() as any);
            }
          } else {
            message.gameScenes.push(reader.int32() as any);
          }
          break;
        case 5:
          message.documentation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Procedure {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parameters: Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => Parameter.fromJSON(e))
        : [],
      returnType: isSet(object.returnType)
        ? Type.fromJSON(object.returnType)
        : undefined,
      returnIsNullable: isSet(object.returnIsNullable)
        ? Boolean(object.returnIsNullable)
        : false,
      gameScenes: Array.isArray(object?.gameScenes)
        ? object.gameScenes.map((e: any) => procedure_GameSceneFromJSON(e))
        : [],
      documentation: isSet(object.documentation)
        ? String(object.documentation)
        : "",
    };
  },

  toJSON(message: Procedure): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.parameters) {
      obj.parameters = message.parameters.map((e) =>
        e ? Parameter.toJSON(e) : undefined
      );
    } else {
      obj.parameters = [];
    }
    message.returnType !== undefined &&
      (obj.returnType = message.returnType
        ? Type.toJSON(message.returnType)
        : undefined);
    message.returnIsNullable !== undefined &&
      (obj.returnIsNullable = message.returnIsNullable);
    if (message.gameScenes) {
      obj.gameScenes = message.gameScenes.map((e) =>
        procedure_GameSceneToJSON(e)
      );
    } else {
      obj.gameScenes = [];
    }
    message.documentation !== undefined &&
      (obj.documentation = message.documentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Procedure>, I>>(
    object: I
  ): Procedure {
    const message = createBaseProcedure();
    message.name = object.name ?? "";
    message.parameters =
      object.parameters?.map((e) => Parameter.fromPartial(e)) || [];
    message.returnType =
      object.returnType !== undefined && object.returnType !== null
        ? Type.fromPartial(object.returnType)
        : undefined;
    message.returnIsNullable = object.returnIsNullable ?? false;
    message.gameScenes = object.gameScenes?.map((e) => e) || [];
    message.documentation = object.documentation ?? "";
    return message;
  },
};

function createBaseParameter(): Parameter {
  return { name: "", type: undefined, defaultValue: new Uint8Array() };
}

export const Parameter = {
  encode(
    message: Parameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(18).fork()).ldelim();
    }
    if (message.defaultValue.length !== 0) {
      writer.uint32(26).bytes(message.defaultValue);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Parameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.type = Type.decode(reader, reader.uint32());
          break;
        case 3:
          message.defaultValue = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Parameter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      defaultValue: isSet(object.defaultValue)
        ? bytesFromBase64(object.defaultValue)
        : new Uint8Array(),
    };
  },

  toJSON(message: Parameter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined &&
      (obj.type = message.type ? Type.toJSON(message.type) : undefined);
    message.defaultValue !== undefined &&
      (obj.defaultValue = base64FromBytes(
        message.defaultValue !== undefined
          ? message.defaultValue
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Parameter>, I>>(
    object: I
  ): Parameter {
    const message = createBaseParameter();
    message.name = object.name ?? "";
    message.type =
      object.type !== undefined && object.type !== null
        ? Type.fromPartial(object.type)
        : undefined;
    message.defaultValue = object.defaultValue ?? new Uint8Array();
    return message;
  },
};

function createBaseClass(): Class {
  return { name: "", documentation: "" };
}

export const Class = {
  encode(message: Class, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.documentation !== "") {
      writer.uint32(18).string(message.documentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Class {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.documentation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Class {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      documentation: isSet(object.documentation)
        ? String(object.documentation)
        : "",
    };
  },

  toJSON(message: Class): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.documentation !== undefined &&
      (obj.documentation = message.documentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Class>, I>>(object: I): Class {
    const message = createBaseClass();
    message.name = object.name ?? "";
    message.documentation = object.documentation ?? "";
    return message;
  },
};

function createBaseEnumeration(): Enumeration {
  return { name: "", values: [], documentation: "" };
}

export const Enumeration = {
  encode(
    message: Enumeration,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.values) {
      EnumerationValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.documentation !== "") {
      writer.uint32(26).string(message.documentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Enumeration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumeration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.values.push(EnumerationValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.documentation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Enumeration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      values: Array.isArray(object?.values)
        ? object.values.map((e: any) => EnumerationValue.fromJSON(e))
        : [],
      documentation: isSet(object.documentation)
        ? String(object.documentation)
        : "",
    };
  },

  toJSON(message: Enumeration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.values) {
      obj.values = message.values.map((e) =>
        e ? EnumerationValue.toJSON(e) : undefined
      );
    } else {
      obj.values = [];
    }
    message.documentation !== undefined &&
      (obj.documentation = message.documentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Enumeration>, I>>(
    object: I
  ): Enumeration {
    const message = createBaseEnumeration();
    message.name = object.name ?? "";
    message.values =
      object.values?.map((e) => EnumerationValue.fromPartial(e)) || [];
    message.documentation = object.documentation ?? "";
    return message;
  },
};

function createBaseEnumerationValue(): EnumerationValue {
  return { name: "", value: 0, documentation: "" };
}

export const EnumerationValue = {
  encode(
    message: EnumerationValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    if (message.documentation !== "") {
      writer.uint32(26).string(message.documentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnumerationValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumerationValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.int32();
          break;
        case 3:
          message.documentation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnumerationValue {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
      documentation: isSet(object.documentation)
        ? String(object.documentation)
        : "",
    };
  },

  toJSON(message: EnumerationValue): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.documentation !== undefined &&
      (obj.documentation = message.documentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnumerationValue>, I>>(
    object: I
  ): EnumerationValue {
    const message = createBaseEnumerationValue();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    message.documentation = object.documentation ?? "";
    return message;
  },
};

function createBaseException(): Exception {
  return { name: "", documentation: "" };
}

export const Exception = {
  encode(
    message: Exception,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.documentation !== "") {
      writer.uint32(18).string(message.documentation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Exception {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseException();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.documentation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Exception {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      documentation: isSet(object.documentation)
        ? String(object.documentation)
        : "",
    };
  },

  toJSON(message: Exception): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.documentation !== undefined &&
      (obj.documentation = message.documentation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Exception>, I>>(
    object: I
  ): Exception {
    const message = createBaseException();
    message.name = object.name ?? "";
    message.documentation = object.documentation ?? "";
    return message;
  },
};

function createBaseType(): Type {
  return { code: 0, service: "", name: "", types: [] };
}

export const Type = {
  encode(message: Type, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    if (message.service !== "") {
      writer.uint32(18).string(message.service);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.types) {
      Type.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Type {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32() as any;
          break;
        case 2:
          message.service = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.types.push(Type.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Type {
    return {
      code: isSet(object.code) ? type_TypeCodeFromJSON(object.code) : 0,
      service: isSet(object.service) ? String(object.service) : "",
      name: isSet(object.name) ? String(object.name) : "",
      types: Array.isArray(object?.types)
        ? object.types.map((e: any) => Type.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Type): unknown {
    const obj: any = {};
    message.code !== undefined &&
      (obj.code = type_TypeCodeToJSON(message.code));
    message.service !== undefined && (obj.service = message.service);
    message.name !== undefined && (obj.name = message.name);
    if (message.types) {
      obj.types = message.types.map((e) => (e ? Type.toJSON(e) : undefined));
    } else {
      obj.types = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Type>, I>>(object: I): Type {
    const message = createBaseType();
    message.code = object.code ?? 0;
    message.service = object.service ?? "";
    message.name = object.name ?? "";
    message.types = object.types?.map((e) => Type.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTuple(): Tuple {
  return { items: [] };
}

export const Tuple = {
  encode(message: Tuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tuple {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: Tuple): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tuple>, I>>(object: I): Tuple {
    const message = createBaseTuple();
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseList(): List {
  return { items: [] };
}

export const List = {
  encode(message: List, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): List {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): List {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: List): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<List>, I>>(object: I): List {
    const message = createBaseList();
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseSet(): Set {
  return { items: [] };
}

export const Set = {
  encode(message: Set, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.items) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Set {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Set {
    return {
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: Set): unknown {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.items = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Set>, I>>(object: I): Set {
    const message = createBaseSet();
    message.items = object.items?.map((e) => e) || [];
    return message;
  },
};

function createBaseDictionary(): Dictionary {
  return { entries: [] };
}

export const Dictionary = {
  encode(
    message: Dictionary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.entries) {
      DictionaryEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dictionary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDictionary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(DictionaryEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Dictionary {
    return {
      entries: Array.isArray(object?.entries)
        ? object.entries.map((e: any) => DictionaryEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Dictionary): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? DictionaryEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Dictionary>, I>>(
    object: I
  ): Dictionary {
    const message = createBaseDictionary();
    message.entries =
      object.entries?.map((e) => DictionaryEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDictionaryEntry(): DictionaryEntry {
  return { key: new Uint8Array(), value: new Uint8Array() };
}

export const DictionaryEntry = {
  encode(
    message: DictionaryEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DictionaryEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDictionaryEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DictionaryEntry {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: DictionaryEntry): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DictionaryEntry>, I>>(
    object: I
  ): DictionaryEntry {
    const message = createBaseDictionaryEntry();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

function createBaseStream(): Stream {
  return { id: 0 };
}

export const Stream = {
  encode(
    message: Stream,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stream {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStream();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Stream {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: Stream): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Stream>, I>>(object: I): Stream {
    const message = createBaseStream();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseEvent(): Event {
  return { stream: undefined };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stream !== undefined) {
      Stream.encode(message.stream, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stream = Stream.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      stream: isSet(object.stream) ? Stream.fromJSON(object.stream) : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    message.stream !== undefined &&
      (obj.stream = message.stream ? Stream.toJSON(message.stream) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.stream =
      object.stream !== undefined && object.stream !== null
        ? Stream.fromPartial(object.stream)
        : undefined;
    return message;
  },
};

function createBaseStatus(): Status {
  return {
    version: "",
    bytesRead: 0,
    bytesWritten: 0,
    bytesReadRate: 0,
    bytesWrittenRate: 0,
    rpcsExecuted: 0,
    rpcRate: 0,
    oneRpcPerUpdate: false,
    maxTimePerUpdate: 0,
    adaptiveRateControl: false,
    blockingRecv: false,
    recvTimeout: 0,
    timePerRpcUpdate: 0,
    pollTimePerRpcUpdate: 0,
    execTimePerRpcUpdate: 0,
    streamRpcs: 0,
    streamRpcsExecuted: 0,
    streamRpcRate: 0,
    timePerStreamUpdate: 0,
  };
}

export const Status = {
  encode(
    message: Status,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.bytesRead !== 0) {
      writer.uint32(16).uint64(message.bytesRead);
    }
    if (message.bytesWritten !== 0) {
      writer.uint32(24).uint64(message.bytesWritten);
    }
    if (message.bytesReadRate !== 0) {
      writer.uint32(37).float(message.bytesReadRate);
    }
    if (message.bytesWrittenRate !== 0) {
      writer.uint32(45).float(message.bytesWrittenRate);
    }
    if (message.rpcsExecuted !== 0) {
      writer.uint32(48).uint64(message.rpcsExecuted);
    }
    if (message.rpcRate !== 0) {
      writer.uint32(61).float(message.rpcRate);
    }
    if (message.oneRpcPerUpdate === true) {
      writer.uint32(64).bool(message.oneRpcPerUpdate);
    }
    if (message.maxTimePerUpdate !== 0) {
      writer.uint32(72).uint32(message.maxTimePerUpdate);
    }
    if (message.adaptiveRateControl === true) {
      writer.uint32(80).bool(message.adaptiveRateControl);
    }
    if (message.blockingRecv === true) {
      writer.uint32(88).bool(message.blockingRecv);
    }
    if (message.recvTimeout !== 0) {
      writer.uint32(96).uint32(message.recvTimeout);
    }
    if (message.timePerRpcUpdate !== 0) {
      writer.uint32(109).float(message.timePerRpcUpdate);
    }
    if (message.pollTimePerRpcUpdate !== 0) {
      writer.uint32(117).float(message.pollTimePerRpcUpdate);
    }
    if (message.execTimePerRpcUpdate !== 0) {
      writer.uint32(125).float(message.execTimePerRpcUpdate);
    }
    if (message.streamRpcs !== 0) {
      writer.uint32(128).uint32(message.streamRpcs);
    }
    if (message.streamRpcsExecuted !== 0) {
      writer.uint32(136).uint64(message.streamRpcsExecuted);
    }
    if (message.streamRpcRate !== 0) {
      writer.uint32(149).float(message.streamRpcRate);
    }
    if (message.timePerStreamUpdate !== 0) {
      writer.uint32(157).float(message.timePerStreamUpdate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.bytesRead = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.bytesWritten = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.bytesReadRate = reader.float();
          break;
        case 5:
          message.bytesWrittenRate = reader.float();
          break;
        case 6:
          message.rpcsExecuted = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.rpcRate = reader.float();
          break;
        case 8:
          message.oneRpcPerUpdate = reader.bool();
          break;
        case 9:
          message.maxTimePerUpdate = reader.uint32();
          break;
        case 10:
          message.adaptiveRateControl = reader.bool();
          break;
        case 11:
          message.blockingRecv = reader.bool();
          break;
        case 12:
          message.recvTimeout = reader.uint32();
          break;
        case 13:
          message.timePerRpcUpdate = reader.float();
          break;
        case 14:
          message.pollTimePerRpcUpdate = reader.float();
          break;
        case 15:
          message.execTimePerRpcUpdate = reader.float();
          break;
        case 16:
          message.streamRpcs = reader.uint32();
          break;
        case 17:
          message.streamRpcsExecuted = longToNumber(reader.uint64() as Long);
          break;
        case 18:
          message.streamRpcRate = reader.float();
          break;
        case 19:
          message.timePerStreamUpdate = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      bytesRead: isSet(object.bytesRead) ? Number(object.bytesRead) : 0,
      bytesWritten: isSet(object.bytesWritten)
        ? Number(object.bytesWritten)
        : 0,
      bytesReadRate: isSet(object.bytesReadRate)
        ? Number(object.bytesReadRate)
        : 0,
      bytesWrittenRate: isSet(object.bytesWrittenRate)
        ? Number(object.bytesWrittenRate)
        : 0,
      rpcsExecuted: isSet(object.rpcsExecuted)
        ? Number(object.rpcsExecuted)
        : 0,
      rpcRate: isSet(object.rpcRate) ? Number(object.rpcRate) : 0,
      oneRpcPerUpdate: isSet(object.oneRpcPerUpdate)
        ? Boolean(object.oneRpcPerUpdate)
        : false,
      maxTimePerUpdate: isSet(object.maxTimePerUpdate)
        ? Number(object.maxTimePerUpdate)
        : 0,
      adaptiveRateControl: isSet(object.adaptiveRateControl)
        ? Boolean(object.adaptiveRateControl)
        : false,
      blockingRecv: isSet(object.blockingRecv)
        ? Boolean(object.blockingRecv)
        : false,
      recvTimeout: isSet(object.recvTimeout) ? Number(object.recvTimeout) : 0,
      timePerRpcUpdate: isSet(object.timePerRpcUpdate)
        ? Number(object.timePerRpcUpdate)
        : 0,
      pollTimePerRpcUpdate: isSet(object.pollTimePerRpcUpdate)
        ? Number(object.pollTimePerRpcUpdate)
        : 0,
      execTimePerRpcUpdate: isSet(object.execTimePerRpcUpdate)
        ? Number(object.execTimePerRpcUpdate)
        : 0,
      streamRpcs: isSet(object.streamRpcs) ? Number(object.streamRpcs) : 0,
      streamRpcsExecuted: isSet(object.streamRpcsExecuted)
        ? Number(object.streamRpcsExecuted)
        : 0,
      streamRpcRate: isSet(object.streamRpcRate)
        ? Number(object.streamRpcRate)
        : 0,
      timePerStreamUpdate: isSet(object.timePerStreamUpdate)
        ? Number(object.timePerStreamUpdate)
        : 0,
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.bytesRead !== undefined &&
      (obj.bytesRead = Math.round(message.bytesRead));
    message.bytesWritten !== undefined &&
      (obj.bytesWritten = Math.round(message.bytesWritten));
    message.bytesReadRate !== undefined &&
      (obj.bytesReadRate = message.bytesReadRate);
    message.bytesWrittenRate !== undefined &&
      (obj.bytesWrittenRate = message.bytesWrittenRate);
    message.rpcsExecuted !== undefined &&
      (obj.rpcsExecuted = Math.round(message.rpcsExecuted));
    message.rpcRate !== undefined && (obj.rpcRate = message.rpcRate);
    message.oneRpcPerUpdate !== undefined &&
      (obj.oneRpcPerUpdate = message.oneRpcPerUpdate);
    message.maxTimePerUpdate !== undefined &&
      (obj.maxTimePerUpdate = Math.round(message.maxTimePerUpdate));
    message.adaptiveRateControl !== undefined &&
      (obj.adaptiveRateControl = message.adaptiveRateControl);
    message.blockingRecv !== undefined &&
      (obj.blockingRecv = message.blockingRecv);
    message.recvTimeout !== undefined &&
      (obj.recvTimeout = Math.round(message.recvTimeout));
    message.timePerRpcUpdate !== undefined &&
      (obj.timePerRpcUpdate = message.timePerRpcUpdate);
    message.pollTimePerRpcUpdate !== undefined &&
      (obj.pollTimePerRpcUpdate = message.pollTimePerRpcUpdate);
    message.execTimePerRpcUpdate !== undefined &&
      (obj.execTimePerRpcUpdate = message.execTimePerRpcUpdate);
    message.streamRpcs !== undefined &&
      (obj.streamRpcs = Math.round(message.streamRpcs));
    message.streamRpcsExecuted !== undefined &&
      (obj.streamRpcsExecuted = Math.round(message.streamRpcsExecuted));
    message.streamRpcRate !== undefined &&
      (obj.streamRpcRate = message.streamRpcRate);
    message.timePerStreamUpdate !== undefined &&
      (obj.timePerStreamUpdate = message.timePerStreamUpdate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status {
    const message = createBaseStatus();
    message.version = object.version ?? "";
    message.bytesRead = object.bytesRead ?? 0;
    message.bytesWritten = object.bytesWritten ?? 0;
    message.bytesReadRate = object.bytesReadRate ?? 0;
    message.bytesWrittenRate = object.bytesWrittenRate ?? 0;
    message.rpcsExecuted = object.rpcsExecuted ?? 0;
    message.rpcRate = object.rpcRate ?? 0;
    message.oneRpcPerUpdate = object.oneRpcPerUpdate ?? false;
    message.maxTimePerUpdate = object.maxTimePerUpdate ?? 0;
    message.adaptiveRateControl = object.adaptiveRateControl ?? false;
    message.blockingRecv = object.blockingRecv ?? false;
    message.recvTimeout = object.recvTimeout ?? 0;
    message.timePerRpcUpdate = object.timePerRpcUpdate ?? 0;
    message.pollTimePerRpcUpdate = object.pollTimePerRpcUpdate ?? 0;
    message.execTimePerRpcUpdate = object.execTimePerRpcUpdate ?? 0;
    message.streamRpcs = object.streamRpcs ?? 0;
    message.streamRpcsExecuted = object.streamRpcsExecuted ?? 0;
    message.streamRpcRate = object.streamRpcRate ?? 0;
    message.timePerStreamUpdate = object.timePerStreamUpdate ?? 0;
    return message;
  },
};

function createBaseMultiplexedRequest(): MultiplexedRequest {
  return { connectionRequest: undefined, request: undefined };
}

export const MultiplexedRequest = {
  encode(
    message: MultiplexedRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.connectionRequest !== undefined) {
      ConnectionRequest.encode(
        message.connectionRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiplexedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiplexedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionRequest = ConnectionRequest.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.request = Request.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiplexedRequest {
    return {
      connectionRequest: isSet(object.connectionRequest)
        ? ConnectionRequest.fromJSON(object.connectionRequest)
        : undefined,
      request: isSet(object.request)
        ? Request.fromJSON(object.request)
        : undefined,
    };
  },

  toJSON(message: MultiplexedRequest): unknown {
    const obj: any = {};
    message.connectionRequest !== undefined &&
      (obj.connectionRequest = message.connectionRequest
        ? ConnectionRequest.toJSON(message.connectionRequest)
        : undefined);
    message.request !== undefined &&
      (obj.request = message.request
        ? Request.toJSON(message.request)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiplexedRequest>, I>>(
    object: I
  ): MultiplexedRequest {
    const message = createBaseMultiplexedRequest();
    message.connectionRequest =
      object.connectionRequest !== undefined &&
      object.connectionRequest !== null
        ? ConnectionRequest.fromPartial(object.connectionRequest)
        : undefined;
    message.request =
      object.request !== undefined && object.request !== null
        ? Request.fromPartial(object.request)
        : undefined;
    return message;
  },
};

function createBaseMultiplexedResponse(): MultiplexedResponse {
  return { response: undefined, streamUpdate: undefined };
}

export const MultiplexedResponse = {
  encode(
    message: MultiplexedResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    if (message.streamUpdate !== undefined) {
      StreamUpdate.encode(
        message.streamUpdate,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiplexedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiplexedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.response = Response.decode(reader, reader.uint32());
          break;
        case 2:
          message.streamUpdate = StreamUpdate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiplexedResponse {
    return {
      response: isSet(object.response)
        ? Response.fromJSON(object.response)
        : undefined,
      streamUpdate: isSet(object.streamUpdate)
        ? StreamUpdate.fromJSON(object.streamUpdate)
        : undefined,
    };
  },

  toJSON(message: MultiplexedResponse): unknown {
    const obj: any = {};
    message.response !== undefined &&
      (obj.response = message.response
        ? Response.toJSON(message.response)
        : undefined);
    message.streamUpdate !== undefined &&
      (obj.streamUpdate = message.streamUpdate
        ? StreamUpdate.toJSON(message.streamUpdate)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiplexedResponse>, I>>(
    object: I
  ): MultiplexedResponse {
    const message = createBaseMultiplexedResponse();
    message.response =
      object.response !== undefined && object.response !== null
        ? Response.fromPartial(object.response)
        : undefined;
    message.streamUpdate =
      object.streamUpdate !== undefined && object.streamUpdate !== null
        ? StreamUpdate.fromPartial(object.streamUpdate)
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
