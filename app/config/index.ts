export const CLIENT_PORT = 8080;
export const SERVER_PORT = 3000;

export const grpcClientOptions = {
  'grpc.lb_policy_name': 'round_robin',
  'grpc.dns_min_time_between_resolutions_ms': 5000,
  'grpc.keepalive_timeout_ms': 1000,
};
