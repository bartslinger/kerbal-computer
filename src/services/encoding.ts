import ByteBuffer from "bytebuffer";
import type Long from "long";
import * as protobufjs from "protobufjs";
import * as krpc from "../generated/proto/krpc";
import { KRPCConnection } from "./connection";
ByteBuffer.DEFAULT_ENDIAN = true;

export const encodeString = (value: string): Uint8Array => {
  return new protobufjs.Writer().string(value).finish();
};

export const encodeBool = (value: boolean): Uint8Array => {
  return new protobufjs.Writer().bool(value).finish();
};

export const encodeFloat = (value: number): Uint8Array => {
  return new protobufjs.Writer().float(value).finish();
};

export const encodeDouble = (value: number): Uint8Array => {
  return new protobufjs.Writer().double(value).finish();
};

export const encodeSint32 = (value: number): Uint8Array => {
  return new protobufjs.Writer().sint32(value).finish();
};

export const encodeUint32 = (value: number): Uint8Array => {
  return new protobufjs.Writer().uint32(value).finish();
};

export const encodeVarint64 = (value: Long): Uint8Array => {
  return new protobufjs.Writer().uint64(value).finish();
};

export const encodeTuple = (value: number[]): Uint8Array => {
  const tuple = krpc.Tuple.fromPartial({
    items: [],
  });
  return krpc.Tuple.encode(tuple).finish();
};

export const decodeNone = (
  conn: KRPCConnection,
  result: Uint8Array
): void => {};

export const decodeString = (
  conn: KRPCConnection,
  result: Uint8Array
): string => {
  return new protobufjs.Reader(result).string();
};

export const decodeBool = (
  conn: KRPCConnection,
  result: Uint8Array
): boolean => {
  return new protobufjs.Reader(result).bool();
};

export const decodeFloat = (
  conn: KRPCConnection,
  result: Uint8Array
): number => {
  return new protobufjs.Reader(result).float();
};

export const decodeDouble = (
  conn: KRPCConnection,
  result: Uint8Array
): number => {
  return new protobufjs.Reader(result).double();
};

export const decodeSint32 = (
  conn: KRPCConnection,
  result: Uint8Array
): number => {
  return new protobufjs.Reader(result).sint32();
};

export const decodeUint32 = (
  conn: KRPCConnection,
  result: Uint8Array
): number => {
  return new protobufjs.Reader(result).uint32();
};

export const decodeEnum = (conn: KRPCConnection, result: Uint8Array): void => {
  return undefined;
};

export const decodeTuple = (
  conn: KRPCConnection,
  result: Uint8Array
): krpc.Tuple => {
  return krpc.Tuple.decode(result);
};

export const decodeList = (
  conn: KRPCConnection,
  result: Uint8Array
): krpc.List => {
  return krpc.List.decode(result);
};
