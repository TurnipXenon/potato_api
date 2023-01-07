// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.12
// source: rpc/potato/service.proto

package potato

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type RevalidatePathRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Path string `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
}

func (x *RevalidatePathRequest) Reset() {
	*x = RevalidatePathRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_potato_service_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RevalidatePathRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RevalidatePathRequest) ProtoMessage() {}

func (x *RevalidatePathRequest) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_potato_service_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RevalidatePathRequest.ProtoReflect.Descriptor instead.
func (*RevalidatePathRequest) Descriptor() ([]byte, []int) {
	return file_rpc_potato_service_proto_rawDescGZIP(), []int{0}
}

func (x *RevalidatePathRequest) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

type RevalidatePathResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Path        string `protobuf:"bytes,1,opt,name=path,proto3" json:"path,omitempty"`
	ServiceName string `protobuf:"bytes,2,opt,name=service_name,json=serviceName,proto3" json:"service_name,omitempty"`
	Message     string `protobuf:"bytes,3,opt,name=message,proto3" json:"message,omitempty"`
	ErrorCode   int32  `protobuf:"varint,4,opt,name=error_code,json=errorCode,proto3" json:"error_code,omitempty"`
}

func (x *RevalidatePathResponse) Reset() {
	*x = RevalidatePathResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_rpc_potato_service_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RevalidatePathResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RevalidatePathResponse) ProtoMessage() {}

func (x *RevalidatePathResponse) ProtoReflect() protoreflect.Message {
	mi := &file_rpc_potato_service_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RevalidatePathResponse.ProtoReflect.Descriptor instead.
func (*RevalidatePathResponse) Descriptor() ([]byte, []int) {
	return file_rpc_potato_service_proto_rawDescGZIP(), []int{1}
}

func (x *RevalidatePathResponse) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *RevalidatePathResponse) GetServiceName() string {
	if x != nil {
		return x.ServiceName
	}
	return ""
}

func (x *RevalidatePathResponse) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *RevalidatePathResponse) GetErrorCode() int32 {
	if x != nil {
		return x.ErrorCode
	}
	return 0
}

var File_rpc_potato_service_proto protoreflect.FileDescriptor

var file_rpc_potato_service_proto_rawDesc = []byte{
	0x0a, 0x18, 0x72, 0x70, 0x63, 0x2f, 0x70, 0x6f, 0x74, 0x61, 0x74, 0x6f, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0e, 0x74, 0x75, 0x72, 0x6e,
	0x69, 0x70, 0x78, 0x65, 0x6e, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x22, 0x2b, 0x0a, 0x15, 0x52, 0x65,
	0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x74, 0x68, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x22, 0x88, 0x01, 0x0a, 0x16, 0x52, 0x65, 0x76, 0x61,
	0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x21, 0x0a, 0x0c, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73,
	0x73, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x63, 0x6f, 0x64,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f,
	0x64, 0x65, 0x32, 0x69, 0x0a, 0x06, 0x50, 0x6f, 0x74, 0x61, 0x74, 0x6f, 0x12, 0x5f, 0x0a, 0x0e,
	0x52, 0x65, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x74, 0x68, 0x12, 0x25,
	0x2e, 0x74, 0x75, 0x72, 0x6e, 0x69, 0x70, 0x78, 0x65, 0x6e, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x74, 0x68, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x74, 0x75, 0x72, 0x6e, 0x69, 0x70, 0x78, 0x65,
	0x6e, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74,
	0x65, 0x50, 0x61, 0x74, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x0c, 0x5a,
	0x0a, 0x72, 0x70, 0x63, 0x2f, 0x70, 0x6f, 0x74, 0x61, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_rpc_potato_service_proto_rawDescOnce sync.Once
	file_rpc_potato_service_proto_rawDescData = file_rpc_potato_service_proto_rawDesc
)

func file_rpc_potato_service_proto_rawDescGZIP() []byte {
	file_rpc_potato_service_proto_rawDescOnce.Do(func() {
		file_rpc_potato_service_proto_rawDescData = protoimpl.X.CompressGZIP(file_rpc_potato_service_proto_rawDescData)
	})
	return file_rpc_potato_service_proto_rawDescData
}

var file_rpc_potato_service_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_rpc_potato_service_proto_goTypes = []interface{}{
	(*RevalidatePathRequest)(nil),  // 0: turnipxenon.v1.RevalidatePathRequest
	(*RevalidatePathResponse)(nil), // 1: turnipxenon.v1.RevalidatePathResponse
}
var file_rpc_potato_service_proto_depIdxs = []int32{
	0, // 0: turnipxenon.v1.Potato.RevalidatePath:input_type -> turnipxenon.v1.RevalidatePathRequest
	1, // 1: turnipxenon.v1.Potato.RevalidatePath:output_type -> turnipxenon.v1.RevalidatePathResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_rpc_potato_service_proto_init() }
func file_rpc_potato_service_proto_init() {
	if File_rpc_potato_service_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_rpc_potato_service_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RevalidatePathRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_rpc_potato_service_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RevalidatePathResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_rpc_potato_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_rpc_potato_service_proto_goTypes,
		DependencyIndexes: file_rpc_potato_service_proto_depIdxs,
		MessageInfos:      file_rpc_potato_service_proto_msgTypes,
	}.Build()
	File_rpc_potato_service_proto = out.File
	file_rpc_potato_service_proto_rawDesc = nil
	file_rpc_potato_service_proto_goTypes = nil
	file_rpc_potato_service_proto_depIdxs = nil
}