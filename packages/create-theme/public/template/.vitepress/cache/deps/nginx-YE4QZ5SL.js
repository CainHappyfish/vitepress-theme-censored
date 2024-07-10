import {
  lua
} from "./chunk-THINXRLJ.js";
import "./chunk-KNSD6D5E.js";
import "./chunk-L6OFPWCY.js";

// ../../../../node_modules/shiki/dist/langs/nginx.mjs
var lang = Object.freeze({ "displayName": "Nginx", "fileTypes": ["conf.erb", "conf", "ngx", "nginx.conf", "mime.types", "fastcgi_params", "scgi_params", "uwsgi_params"], "foldingStartMarker": "\\{\\s*$", "foldingStopMarker": "^\\s*\\}", "name": "nginx", "patterns": [{ "match": "\\#.*", "name": "comment.line.number-sign" }, { "begin": "\\b((?:content|rewrite|access|init_worker|init|set|log|balancer|ssl_(?:client_hello|session_fetch|certificate))_by_lua(?:_block)?)\\s*\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "contentName": "meta.embedded.block.lua", "end": "\\}", "name": "meta.context.lua.nginx", "patterns": [{ "include": "source.lua" }] }, { "begin": "\\b((?:content|rewrite|access|init_worker|init|set|log|balancer|ssl_(?:client_hello|session_fetch|certificate))_by_lua)\\s*'", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "contentName": "meta.embedded.block.lua", "end": "'", "name": "meta.context.lua.nginx", "patterns": [{ "include": "source.lua" }] }, { "begin": "\\b(events) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.events.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(http) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.http.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(mail) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.mail.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(stream) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.stream.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(server) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.server.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(location) +([\\^]?~[\\*]?|=) +(.*?)\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" }, "2": { "name": "keyword.operator.nginx" }, "3": { "name": "string.regexp.nginx" } }, "end": "\\}", "name": "meta.context.location.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(location) +(.*?)\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" }, "2": { "name": "entity.name.context.location.nginx" } }, "end": "\\}", "name": "meta.context.location.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(limit_except) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.limit_except.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(if) +\\(", "beginCaptures": { "1": { "name": "keyword.control.nginx" } }, "end": "\\)", "name": "meta.context.if.nginx", "patterns": [{ "include": "#if_condition" }] }, { "begin": "\\b(upstream) +(.*?)\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" }, "2": { "name": "entity.name.context.location.nginx" } }, "end": "\\}", "name": "meta.context.upstream.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(types) +\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" } }, "end": "\\}", "name": "meta.context.types.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(map) +(\\$)([A-Za-z0-9\\_]+) +(\\$)([A-Za-z0-9\\_]+) *\\{", "beginCaptures": { "1": { "name": "storage.type.directive.context.nginx" }, "2": { "name": "punctuation.definition.variable.nginx" }, "3": { "name": "variable.parameter.nginx" }, "4": { "name": "punctuation.definition.variable.nginx" }, "5": { "name": "variable.other.nginx" } }, "end": "\\}", "name": "meta.context.map.nginx", "patterns": [{ "include": "#values" }, { "match": ";", "name": "punctuation.terminator.nginx" }, { "match": "\\#.*", "name": "comment.line.number-sign" }] }, { "begin": "\\{", "end": "\\}", "name": "meta.block.nginx", "patterns": [{ "include": "$self" }] }, { "begin": "\\b(return)\\b", "beginCaptures": { "1": { "name": "keyword.control.nginx" } }, "end": ";", "patterns": [{ "include": "#values" }] }, { "begin": "\\b(rewrite)\\s+", "beginCaptures": { "1": { "name": "keyword.directive.nginx" } }, "end": "(last|break|redirect|permanent)?(;)", "endCaptures": { "1": { "name": "keyword.other.nginx" }, "2": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": "\\b(server)\\s+", "beginCaptures": { "1": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "1": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#server_parameters" }] }, { "begin": "\\b(internal|empty_gif|f4f|flv|hls|mp4|break|status|stub_status|ip_hash|ntlm|least_conn|upstream_conf|least_conn|zone_sync)\\b", "beginCaptures": { "1": { "name": "keyword.directive.nginx" } }, "end": "(;|$)", "endCaptures": { "1": { "name": "punctuation.terminator.nginx" } } }, { "begin": `(["'\\s]|^)(accept_)(mutex|mutex_delay)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(debug_)(connection|points)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(error_)(log|page)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(ssl_)(engine|buffer_size|certificate|certificate_key|ciphers|client_certificate|conf_command|crl|dhparam|early_data|ecdh_curve|ocsp|ocsp_cache|ocsp_responder|password_file|prefer_server_ciphers|protocols|reject_handshake|session_cache|session_ticket_key|session_tickets|session_timeout|stapling|stapling_file|stapling_responder|stapling_verify|trusted_certificate|verify_client|verify_depth|alpn|handshake_timeout|preread)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(worker_)(aio_requests|connections|cpu_affinity|priority|processes|rlimit_core|rlimit_nofile|shutdown_timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(auth_)(delay|basic|basic_user_file|jwt|jwt_claim_set|jwt_header_set|jwt_key_cache|jwt_key_file|jwt_key_request|jwt_leeway|jwt_type|jwt_require|request|request_set|http|http_header|http_pass_client_cert|http_timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(client_)(body_buffer_size|body_in_file_only|body_in_single_buffer|body_temp_path|body_timeout|header_buffer_size|header_timeout|max_body_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(keepalive_)(disable|requests|time|timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(limit_)(rate|rate_after|conn|conn_dry_run|conn_log_level|conn_status|conn_zone|zone|req|req_dry_run|req_log_level|req_status|req_zone)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(lingering_)(close|time|timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(log_)(not_found|subrequest|format)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(max_)(ranges|errors)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(msie_)(padding|refresh)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(open_)(file_cache|file_cache_errors|file_cache_min_uses|file_cache_valid|log_file_cache)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(send_)(lowat|timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(server_)(name|name_in_redirect|names_hash_bucket_size|names_hash_max_size|tokens)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(tcp_)(nodelay|nopush)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(types_)(hash_bucket_size|hash_max_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(variables_)(hash_bucket_size|hash_max_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(add_)(before_body|after_body|header|trailer)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(status_)(zone|format)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(autoindex_)(exact_size|format|localtime)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(ancient_)(browser|browser_value)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(modern_)(browser|browser_value)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(charset_)(map|types)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(dav_)(access|methods)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(fastcgi_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|catch_stderr|connect_timeout|force_ranges|hide_header|ignore_client_abort|ignore_headers|index|intercept_errors|keep_conn|limit_rate|max_temp_file_size|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|param|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|request_buffering|send_lowat|send_timeout|socket_keepalive|split_path_info|store|store_access|temp_file_write_size|temp_path)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(geoip_)(country|city|org|proxy|proxy_recursive)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(grpc_)(bind|buffer_size|connect_timeout|hide_header|ignore_headers|intercept_errors|next_upstream|next_upstream_timeout|next_upstream_tries|pass|pass_header|read_timeout|send_timeout|set_header|socket_keepalive|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_conf_command|ssl_crl|ssl_name|ssl_password_file|ssl_protocols|ssl_server_name|ssl_session_reuse|ssl_trusted_certificate|ssl_verify|ssl_verify_depth)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(gzip_)(buffers|comp_level|disable|http_version|min_length|proxied|types|vary|static)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(hls_)(buffers|forward_args|fragment|mp4_buffer_size|mp4_max_buffer_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(image_)(filter|filter_buffer|filter_interlace|filter_jpeg_quality|filter_sharpen|filter_transparency|filter_webp_quality)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(map_)(hash_bucket_size|hash_max_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(memcached_)(bind|buffer_size|connect_timeout|gzip_flag|next_upstream|next_upstream_timeout|next_upstream_tries|pass|read_timeout|send_timeout|socket_keepalive)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(mp4_)(buffer_size|max_buffer_size|limit_rate|limit_rate_after|start_key_frame)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(perl_)(modules|require|set)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(proxy_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_convert_head|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|connect_timeout|cookie_domain|cookie_flags|cookie_path|force_ranges|headers_hash_bucket_size|headers_hash_max_size|hide_header|http_version|ignore_client_abort|ignore_headers|intercept_errors|limit_rate|max_temp_file_size|method|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|redirect|request_buffering|send_lowat|send_timeout|set_body|set_header|socket_keepalive|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_conf_command|ssl_crl|ssl_name|ssl_password_file|ssl_protocols|ssl_server_name|ssl_session_reuse|ssl_trusted_certificate|ssl_verify|ssl_verify_depth|store|store_access|temp_file_write_size|temp_path|buffer|pass_error_message|protocol|smtp_auth|timeout|protocol_timeout|download_rate|half_close|requests|responses|session_drop|ssl|upload_rate)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(real_)(ip_header|ip_recursive)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(referer_)(hash_bucket_size|hash_max_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(scgi_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|connect_timeout|force_ranges|hide_header|ignore_client_abort|ignore_headers|intercept_errors|limit_rate|max_temp_file_size|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|param|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|request_buffering|send_timeout|socket_keepalive|store|store_access|temp_file_write_size|temp_path)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(secure_)(link|link_md5|link_secret)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(session_)(log|log_format|log_zone)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(ssi_)(last_modified|min_file_chunk|silent_errors|types|value_length)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(sub_)(filter|filter_last_modified|filter_once|filter_types)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(health_)(check|check_timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(userid_)(domain|expires|flags|mark|name|p3p|path|service)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(uwsgi_)(bind|buffer_size|buffering|buffers|busy_buffers_size|cache|cache_background_update|cache_bypass|cache_key|cache_lock|cache_lock_age|cache_lock_timeout|cache_max_range_offset|cache_methods|cache_min_uses|cache_path|cache_purge|cache_revalidate|cache_use_stale|cache_valid|connect_timeout|force_ranges|hide_header|ignore_client_abort|ignore_headers|intercept_errors|limit_rate|max_temp_file_size|modifier1|modifier2|next_upstream|next_upstream_timeout|next_upstream_tries|no_cache|param|pass|pass_header|pass_request_body|pass_request_headers|read_timeout|request_buffering|send_timeout|socket_keepalive|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_conf_command|ssl_crl|ssl_name|ssl_password_file|ssl_protocols|ssl_server_name|ssl_session_reuse|ssl_trusted_certificate|ssl_verify|ssl_verify_depth|store|store_access|temp_file_write_size|temp_path)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(http2_)(body_preread_size|chunk_size|idle_timeout|max_concurrent_pushes|max_concurrent_streams|max_field_size|max_header_size|max_requests|push|push_preload|recv_buffer_size|recv_timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(http3_)(hq|max_concurrent_streams|stream_buffer_size)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(quic_)(active_connection_id_limit|bpf|gso|host_key|retry)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(xslt_)(last_modified|param|string_param|stylesheet|types)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(imap_)(auth|capabilities|client_buffer)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(pop3_)(auth|capabilities)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(smtp_)(auth|capabilities|client_buffer|greeting_delay)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(preread_)(buffer_size|timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(mqtt_)(preread|buffers|rewrite_buffer_size|set_connect)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(zone_)(sync_buffers|sync_connect_retry_interval|sync_connect_timeout|sync_interval|sync_recv_buffer_size|sync_server|sync_ssl|sync_ssl_certificate|sync_ssl_certificate_key|sync_ssl_ciphers|sync_ssl_conf_command|sync_ssl_crl|sync_ssl_name|sync_ssl_password_file|sync_ssl_protocols|sync_ssl_server_name|sync_ssl_trusted_certificate|sync_ssl_verify|sync_ssl_verify_depth|sync_timeout)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(otel_)(exporter|service_name|trace|trace_context|span_name|span_attr)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(js_)(body_filter|content|fetch_buffer_size|fetch_ciphers|fetch_max_response_buffer_size|fetch_protocols|fetch_timeout|fetch_trusted_certificate|fetch_verify|fetch_verify_depth|header_filter|import|include|path|periodic|preload_object|set|shared_dict_zone|var|access|filter|preread)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" }, "4": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": `(["'\\s]|^)(daemon|env|include|pid|use|user|aio|alias|directio|etag|listen|resolver|root|satisfy|sendfile|allow|deny|api|autoindex|charset|geo|gunzip|gzip|expires|index|keyval|mirror|perl|set|slice|ssi|ssl|zone|state|hash|keepalive|queue|random|sticky|match|userid|http2|http3|protocol|timeout|xclient|starttls|mqtt|load_module|lock_file|master_process|multi_accept|pcre_jit|thread_pool|timer_resolution|working_directory|absolute_redirect|aio_write|chunked_transfer_encoding|connection_pool_size|default_type|directio_alignment|disable_symlinks|if_modified_since|ignore_invalid_headers|large_client_header_buffers|merge_slashes|output_buffers|port_in_redirect|postpone_output|read_ahead|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver_timeout|sendfile_max_chunk|subrequest_output_buffer_size|try_files|underscores_in_headers|addition_types|override_charset|source_charset|create_full_put_path|min_delete_depth|f4f_buffer_size|gunzip_buffers|internal_redirect|keyval_zone|access_log|mirror_request_body|random_index|set_real_ip_from|valid_referers|rewrite_log|uninitialized_variable_warn|split_clients|least_time|sticky_cookie_insert|xml_entities|google_perftools_profiles)(["'\\s]|$)`, "beginCaptures": { "1": { "name": "keyword.directive.nginx" }, "2": { "name": "keyword.directive.nginx" }, "3": { "name": "keyword.directive.nginx" } }, "end": ";", "endCaptures": { "0": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": "\\b([a-zA-Z0-9\\_]+)\\s+", "beginCaptures": { "1": { "name": "keyword.directive.unknown.nginx" } }, "end": "(;|$)", "endCaptures": { "1": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }, { "begin": "\\b([a-z]+\\/[A-Za-z0-9\\-\\.\\+]+)\\b", "beginCaptures": { "1": { "name": "constant.other.mediatype.nginx" } }, "end": "(;)", "endCaptures": { "1": { "name": "punctuation.terminator.nginx" } }, "patterns": [{ "include": "#values" }] }], "repository": { "if_condition": { "patterns": [{ "include": "#variables" }, { "match": "\\!?\\~\\*?\\s", "name": "keyword.operator.nginx" }, { "match": "\\!?\\-[fdex]\\s", "name": "keyword.operator.nginx" }, { "match": "\\!?=[^=]", "name": "keyword.operator.nginx" }, { "include": "#regexp_and_string" }] }, "regexp_and_string": { "patterns": [{ "match": "\\^.*?\\$", "name": "string.regexp.nginx" }, { "begin": '"', "end": '"', "name": "string.quoted.double.nginx", "patterns": [{ "match": `\\\\["'nt\\\\]`, "name": "constant.character.escape.nginx" }, { "include": "#variables" }] }, { "begin": "'", "end": "'", "name": "string.quoted.single.nginx", "patterns": [{ "match": `\\\\["'nt\\\\]`, "name": "constant.character.escape.nginx" }, { "include": "#variables" }] }] }, "server_parameters": { "patterns": [{ "captures": { "1": { "name": "variable.parameter.nginx" }, "2": { "name": "keyword.operator.nginx" }, "3": { "name": "constant.numeric.nginx" } }, "match": "(?:^|\\s)(weight|max_conn|max_fails|fail_timeout|slow_start)(=)(\\d[\\d\\.]*[bBkKmMgGtTsShHdD]?)(?:\\s|;|$)" }, { "include": "#values" }] }, "values": { "patterns": [{ "include": "#variables" }, { "match": "\\#.*", "name": "comment.line.number-sign" }, { "captures": { "1": { "name": "constant.numeric.nginx" } }, "match": "(?<=\\G|\\s)(=?[0-9][0-9\\.]*[bBkKmMgGtTsShHdD]?)(?=[\\t ;])" }, { "match": "(?<=\\G|\\s)(on|off|true|false)(?=[\\t ;])", "name": "constant.language.nginx" }, { "match": "(?<=\\G|\\s)(kqueue|rtsig|epoll|\\/dev\\/poll|select|poll|eventport|max|all|default_server|default|main|crit|error|debug|warn|notice|last)(?=[\\t ;])", "name": "constant.language.nginx" }, { "match": "\\\\.*\\ |\\~\\*|\\~|\\!\\~\\*|\\!\\~", "name": "keyword.operator.nginx" }, { "include": "#regexp_and_string" }] }, "variables": { "patterns": [{ "captures": { "1": { "name": "punctuation.definition.variable.nginx" }, "2": { "name": "variable.other.nginx" } }, "match": "(\\$)([A-Za-z0-9\\_]+)\\b" }, { "captures": { "1": { "name": "punctuation.definition.variable.nginx" }, "2": { "name": "variable.other.nginx" }, "3": { "name": "punctuation.definition.variable.nginx" } }, "match": "(\\$\\{)([A-Za-z0-9\\_]+)(\\})" }] } }, "scopeName": "source.nginx", "embeddedLangs": ["lua"] });
var nginx = [
  ...lua,
  lang
];
export {
  nginx as default
};
//# sourceMappingURL=nginx-YE4QZ5SL.js.map
