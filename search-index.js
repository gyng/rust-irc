var searchIndex = {};
searchIndex['irc'] = {"items":[[0,"","irc",""],[1,"IrcMessage","",""],[1,"IrcConnection","",""],[1,"RegisterError","",""],[11,"errtype","","",0],[11,"message","","",0],[1,"JoinSuccess","",""],[11,"channel","","",1],[11,"nicks","","",1],[11,"topic","","",1],[1,"JoinError","",""],[11,"channel","","",2],[11,"errcode","","",2],[11,"message","","",2],[1,"WhoRecord","",""],[11,"hostname","","",3],[11,"server","","",3],[11,"username","","",3],[11,"nick","","",3],[11,"rest","","",3],[1,"WhoSuccess","",""],[11,"channel","","",4],[11,"who_records","","",4],[1,"WhoError","",""],[11,"channel","","",5],[1,"BundlerManager","","Controls the lifecycle of EventWatchers, Bundlers, and BundlerTriggers"],[1,"JoinBundlerTrigger","",""],[1,"WhoBundlerTrigger","",""],[1,"User","",""],[1,"UserId","",""],[1,"Channel","",""],[1,"ChannelId","",""],[1,"State","",""],[2,"IrcConnectionCommand","",""],[12,"RawWrite","","",6],[12,"AddWatcher","","",6],[12,"AddBundler","","",6],[2,"IrcEvent","","An event, which is usually generated by reading a line from the server."],[12,"Message","","An IRC message from the server",7],[12,"JoinBundle","","The bundled result of a JOIN command",7],[12,"WhoBundle","","The bundled result of a WHO command",7],[2,"RegisterErrorType","",""],[12,"NoNicknameGiven","","",8],[12,"NicknameInUse","","",8],[12,"UnavailableResource","","",8],[12,"ErroneousNickname","","",8],[12,"NicknameCollision","","",8],[12,"Restricted","","",8],[2,"MessageEndpoint","",""],[12,"KnownUser","","",9],[12,"KnownChannel","","",9],[12,"Server","","",9],[12,"AnonymousUser","","",9],[10,"raw_write","","",6],[10,"fmt","","",6],[10,"new","","",10],[10,"register","","",10],[10,"join","","",10],[10,"who","","",10],[10,"write_str","","",10],[10,"write_buf","","",10],[10,"get_command_queue","","",10],[10,"clone","","",11],[10,"from_str","","",11],[10,"get_typed_message","","",11],[10,"is_privmsg","","",11],[10,"target_is_channel","","",11],[10,"channel","","",11],[10,"source_nick","","",11],[10,"get_prefix","","",11],[10,"get_prefix_raw","","",11],[10,"command","","",11],[10,"get_args","","",11],[10,"get_args_checked","","",11],[10,"fmt","","",11],[10,"fmt","","",1],[10,"clone","","",1],[10,"fmt","","",2],[10,"clone","","",2],[10,"new","","",12],[10,"on_message","","",12],[10,"fmt","","",12],[10,"new","","",13],[10,"add_watcher","","",13],[10,"add_bundler","","",13],[10,"add_bundler_trigger","","",13],[10,"on_message","","",13],[10,"fmt","","",0],[10,"clone","","",0],[10,"should_pick_new_nickname","","",0],[10,"fmt","","",8],[10,"clone","","",8],[10,"is_known_error","","",8],[10,"from_ord_known","","",8],[10,"fmt","","",4],[10,"clone","","",4],[10,"fmt","","",5],[10,"clone","","",5],[10,"fmt","","",3],[10,"clone","","",3],[10,"get_prefix_raw","","",3],[10,"get_prefix","","",3],[10,"new","","",14],[10,"on_message","","",14],[0,"message_types","","Experimental message types"],[0,"server","irc::message_types","Messages that come from the server"],[1,"Join","irc::message_types::server",""],[1,"Kick","",""],[1,"Mode","",""],[1,"Nick","",""],[1,"Notice","",""],[1,"Part","",""],[1,"Ping","",""],[1,"Privmsg","",""],[1,"Quit","",""],[1,"Topic","",""],[1,"Numeric","",""],[2,"IncomingMsg","",""],[12,"Join","","",15],[12,"Kick","","",15],[12,"Mode","","",15],[12,"Nick","","",15],[12,"Notice","","",15],[12,"Part","","",15],[12,"Ping","","",15],[12,"Privmsg","","",15],[12,"Quit","","",15],[12,"Topic","","",15],[12,"Numeric","","",15],[12,"Unknown","","",15],[6,"IntoIncomingMsg","",""],[9,"into_incoming_msg","","",16],[10,"fmt","","",15],[10,"clone","","",15],[10,"from_msg","","",15],[10,"is_privmsg","","",15],[10,"to_irc_msg","","",15],[10,"into_irc_msg","","",15],[10,"fmt","","",17],[10,"clone","","",17],[10,"into_irc_msg","","",17],[10,"to_irc_msg","","",17],[10,"into_incoming_msg","","",17],[10,"get_channel","","",17],[10,"get_nick","","",17],[10,"from_irc_msg","","",17],[10,"fmt","","",18],[10,"clone","","",18],[10,"into_incoming_msg","","",18],[10,"into_irc_msg","","",18],[10,"to_irc_msg","","",18],[10,"get_channel","","",18],[10,"get_kicked_nick","","nick of the user being kicked",18],[10,"get_nick","","nick of the user doing the kicking",18],[10,"get_body_raw","","",18],[10,"from_irc_msg","","",18],[10,"fmt","","",19],[10,"clone","","",19],[10,"into_incoming_msg","","",19],[10,"into_irc_msg","","",19],[10,"to_irc_msg","","",19],[10,"get_target","","Target of the MODE command, channel or user",19],[10,"from_irc_msg","","",19],[10,"fmt","","",20],[10,"clone","","",20],[10,"into_incoming_msg","","",20],[10,"into_irc_msg","","",20],[10,"to_irc_msg","","",20],[10,"get_nick","","The previous nick of the user",20],[10,"get_new_nick","","The new nick of the user",20],[10,"from_irc_msg","","",20],[10,"fmt","","",21],[10,"clone","","",21],[10,"into_incoming_msg","","",21],[10,"into_irc_msg","","",21],[10,"to_irc_msg","","",21],[10,"get_target","","Target of the MODE command, channel or user",21],[10,"from_irc_msg","","",21],[10,"fmt","","",22],[10,"clone","","",22],[10,"into_incoming_msg","","",22],[10,"into_irc_msg","","",22],[10,"to_irc_msg","","",22],[10,"get_nick","","",22],[10,"get_channel","","",22],[10,"from_irc_msg","","",22],[10,"fmt","","",23],[10,"clone","","",23],[10,"into_incoming_msg","","",23],[10,"into_irc_msg","","",23],[10,"to_irc_msg","","",23],[10,"get_server1","","",23],[10,"get_server2","","",23],[10,"get_response","","",23],[10,"from_irc_msg","","",23],[10,"fmt","","",24],[10,"clone","","",24],[10,"into_incoming_msg","","",24],[10,"into_irc_msg","","",24],[10,"to_irc_msg","","",24],[10,"get_target","","",24],[10,"get_nick","","",24],[10,"get_body_raw","","",24],[10,"from_irc_msg","","",24],[10,"fmt","","",25],[10,"clone","","",25],[10,"into_incoming_msg","","",25],[10,"into_irc_msg","","",25],[10,"to_irc_msg","","",25],[10,"get_nick","","",25],[10,"get_channel","","",25],[10,"get_body_raw","","",25],[10,"from_irc_msg","","",25],[10,"fmt","","",26],[10,"clone","","",26],[10,"into_incoming_msg","","",26],[10,"into_irc_msg","","",26],[10,"to_irc_msg","","",26],[10,"get_channel","","",26],[10,"get_nick","","",26],[10,"get_body_raw","","",26],[10,"from_irc_msg","","",26],[10,"fmt","","",27],[10,"clone","","",27],[10,"into_irc_msg","","",27],[10,"to_irc_msg","","",27],[10,"get_code","","",27],[10,"into_incoming_msg","","",27],[10,"from_irc_msg","","",27],[0,"client","irc::message_types","Messages that come from the client"],[1,"Pong","irc::message_types::client",""],[1,"Privmsg","",""],[2,"OutgoingMsg","",""],[12,"Pong","","",28],[10,"fmt","","",28],[10,"clone","","",28],[10,"fmt","","",29],[10,"clone","","",29],[10,"into_bytes","","",29],[10,"into_irc_msg","","",29],[10,"to_irc_msg","","",29],[10,"new","","",29],[10,"fmt","","",30],[10,"clone","","",30],[10,"into_bytes","","",30],[10,"into_irc_msg","","",30],[10,"to_irc_msg","","",30],[10,"new","","",30],[10,"new_ctcp","","",30],[0,"util","irc","Experimental utility code"],[1,"StringSlicer","irc::util",""],[1,"OptionalStringSlicer","",""],[10,"fmt","","",31],[10,"clone","","",31],[10,"eq","","",31],[10,"ne","","",31],[10,"new","","Create a new StringSlicer",31],[10,"slice_on","","Apply the slice operation to a string",31],[10,"slice_from","","Composes slicers. The new slices will function as if\nself.slice_from(ss.slice_on(...)) was called, carrying any\nOptions over",31],[10,"slice_from_opt","","Composes slicers. The new slices will function as if\nself.slice_from(ss.slice_on(...)) was called, carrying any\nOptions over",31],[10,"fmt","","",32],[10,"clone","","",32],[10,"eq","","",32],[10,"ne","","",32],[10,"new_some","","",32],[10,"new_none","","",32],[10,"slice_on","","",32],[10,"slice_from","","Composes slicers. The new slices will function as if\nself.slice_from(ss.slice_on(...)) was called, carrying any\nOptions over",32],[10,"slice_from_opt","","Composes slicers. The new slices will function as if\nself.slice_from(ss.slice_on(...)) was called, carrying any\nOptions over",32],[0,"parse","irc","Experimental parsing code"],[1,"IrcMsg","irc::parse",""],[1,"IrcMsgPrefix","","An IRC prefix, which identifies the source of a message."],[2,"ParseError","",""],[12,"InvalidMessage","","",33],[12,"EncodingError","","",33],[3,"can_target_channel","","Whether or not a command name is allowed to target a channel"],[3,"is_channel","","Determines whether or not an identifier is a channel, by checking\nthe first character."],[3,"is_full_prefix","","Checks whether a prefix contains nick, username and host or not."],[10,"eq","","",33],[10,"ne","","",33],[10,"fmt","","",33],[10,"fmt","","",34],[10,"clone","","",34],[10,"new","","",34],[10,"has_prefix","","",34],[10,"get_prefix_raw","","",34],[10,"get_prefix_str","","",34],[10,"get_prefix","","",34],[10,"get_command","","",34],[10,"get_args","","",34],[10,"len","","",34],[10,"into_bytes","","",34],[10,"as_bytes","","",34],[10,"index","","",34],[10,"clone","","",35],[10,"new","","Parse a MaybeOwned into a IrcMsgPrefix",35],[10,"nick","","The nick component of a prefix",35],[10,"username","","The username component of a prefix",35],[10,"hostname","","The hostname component of a prefix",35],[10,"as_slice","","Get the protocol representation as a slice",35],[10,"to_owned","","Get an owned copy",35],[10,"with_nick","","Get an owned copy with a replaced nick",35],[10,"eq","","",35],[10,"fmt","","",35],[10,"fmt","irc","",7],[10,"into_irc_lower","collections::vec","",36],[10,"into_irc_lower","collections::string","",37],[10,"hash","irc","",9],[10,"eq","","",9],[10,"ne","","",9],[10,"fmt","","",9],[10,"clone","","",9],[10,"cmp","","",38],[10,"partial_cmp","","",38],[10,"lt","","",38],[10,"le","","",38],[10,"gt","","",38],[10,"ge","","",38],[10,"eq","","",38],[10,"ne","","",38],[10,"hash","","",38],[10,"fmt","","",38],[10,"clone","","",38],[10,"fmt","","",39],[10,"eq","","",39],[10,"ne","","",39],[10,"clone","","",39],[10,"get_nick","","",39],[10,"cmp","","",40],[10,"partial_cmp","","",40],[10,"lt","","",40],[10,"le","","",40],[10,"gt","","",40],[10,"ge","","",40],[10,"eq","","",40],[10,"ne","","",40],[10,"hash","","",40],[10,"fmt","","",40],[10,"clone","","",40],[10,"fmt","","",41],[10,"eq","","",41],[10,"ne","","",41],[10,"clone","","",41],[10,"clone","","",42],[10,"fmt","","",42],[10,"new","","",42],[10,"on_event","","",42],[10,"get_self_nick","","",42],[10,"set_self_nick","","",42],[10,"identify_channel","","",42],[10,"resolve_channel","","",42],[10,"identify_nick","","",42],[10,"resolve_user","","",42],[10,"eq","","",42],[4,"JoinResult","",""],[4,"WhoResult","",""],[6,"IrcAsciiExt","",""],[9,"to_irc_lower","","Makes a copy of the string in IRC ASCII lower case:\nASCII letters 'A' to 'Z' are mapped to 'a' to 'z',\nand \"[]\\\\~\" are mapped to \"{}|\\^\" respectively,\nbut all other characters are unchanged.",43],[9,"eq_ignore_irc_case","","Check that two strings are an ASCII case-insensitive match.\nSame as `to_irc_lower(a) == to_irc_lower(b)`,\nbut without allocating and copying temporary strings.",43],[6,"OwnedIrcAsciiExt","",""],[9,"into_irc_lower","","",44]],"paths":[[1,"RegisterError"],[1,"JoinSuccess"],[1,"JoinError"],[1,"WhoRecord"],[1,"WhoSuccess"],[1,"WhoError"],[2,"IrcConnectionCommand"],[2,"IrcEvent"],[2,"RegisterErrorType"],[2,"MessageEndpoint"],[1,"IrcConnection"],[1,"IrcMessage"],[1,"JoinBundlerTrigger"],[1,"BundlerManager"],[1,"WhoBundlerTrigger"],[2,"IncomingMsg"],[6,"IntoIncomingMsg"],[1,"Join"],[1,"Kick"],[1,"Mode"],[1,"Nick"],[1,"Notice"],[1,"Part"],[1,"Ping"],[1,"Privmsg"],[1,"Quit"],[1,"Topic"],[1,"Numeric"],[2,"OutgoingMsg"],[1,"Pong"],[1,"Privmsg"],[1,"StringSlicer"],[1,"OptionalStringSlicer"],[2,"ParseError"],[1,"IrcMsg"],[1,"IrcMsgPrefix"],[1,"Vec"],[1,"String"],[1,"UserId"],[1,"User"],[1,"ChannelId"],[1,"Channel"],[1,"State"],[6,"IrcAsciiExt"],[6,"OwnedIrcAsciiExt"]]};
searchIndex['time'] = {"items":[[0,"","time","Simple time handling."],[1,"Timespec","","A record specifying a time value in seconds and nanoseconds."],[11,"sec","","",0],[11,"nsec","","",0],[1,"Tm","","Holds a calendar date and time broken down into its components (year, month, day, and so on),\nalso called a broken-down time value."],[11,"tm_sec","","Seconds after the minute - [0, 60]",1],[11,"tm_min","","Minutes after the hour - [0, 59]",1],[11,"tm_hour","","Hours after midnight - [0, 23]",1],[11,"tm_mday","","Day of the month - [1, 31]",1],[11,"tm_mon","","Months since January - [0, 11]",1],[11,"tm_year","","Years since 1900",1],[11,"tm_wday","","Days since Sunday - [0, 6]. 0 = Sunday, 1 = Monday, ..., 6 = Saturday.",1],[11,"tm_yday","","Days since January 1 - [0, 365]",1],[11,"tm_isdst","","Daylight Saving Time flag.",1],[11,"tm_utcoff","","Identifies the time zone that was used to compute this broken-down time value, including any\nadjustment for Daylight Saving Time. This is the number of seconds east of UTC. For example,\nfor U.S. Pacific Daylight Time, the value is -7*60*60 = -25200.",1],[11,"tm_nsec","","Nanoseconds after the second - [0, 10<sup>9</sup> - 1]",1],[1,"TmFmt","","A wrapper around a `Tm` and format string that implements Show."],[2,"ParseError","",""],[12,"InvalidSecond","","",2],[12,"InvalidMinute","","",2],[12,"InvalidHour","","",2],[12,"InvalidDay","","",2],[12,"InvalidMonth","","",2],[12,"InvalidYear","","",2],[12,"InvalidDayOfWeek","","",2],[12,"InvalidDayOfMonth","","",2],[12,"InvalidDayOfYear","","",2],[12,"InvalidZoneOffset","","",2],[12,"InvalidTime","","",2],[12,"MissingFormatConverter","","",2],[12,"InvalidFormatSpecifier","","",2],[12,"UnexpectedCharacter","","",2],[3,"get_time","","Returns the current time as a `timespec` containing the seconds and\nnanoseconds since 1970-01-01T00:00:00Z."],[3,"precise_time_ns","","Returns the current value of a high-resolution performance counter\nin nanoseconds since an unspecified epoch."],[3,"precise_time_s","","Returns the current value of a high-resolution performance counter\nin seconds since an unspecified epoch."],[3,"tzset","",""],[3,"empty_tm","",""],[3,"at_utc","","Returns the specified time in UTC"],[3,"now_utc","","Returns the current time in UTC"],[3,"at","","Returns the specified time in the local timezone"],[3,"now","","Returns the current time in the local timezone"],[3,"strptime","","Parses the time from the string according to the format string."],[3,"strftime","","Formats the time according to the format string."],[10,"fmt","","",0],[10,"decode","","",0],[10,"encode","","",0],[10,"cmp","","",0],[10,"partial_cmp","","",0],[10,"lt","","",0],[10,"le","","",0],[10,"gt","","",0],[10,"ge","","",0],[10,"eq","","",0],[10,"ne","","",0],[10,"clone","","",0],[10,"new","","",0],[10,"add","","",0],[10,"sub","","",0],[10,"fmt","","",1],[10,"eq","","",1],[10,"ne","","",1],[10,"clone","","",1],[10,"to_timespec","","Convert time to the seconds from January 1, 1970",1],[10,"to_local","","Convert time to the local timezone",1],[10,"to_utc","","Convert time to the UTC",1],[10,"ctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC, in the local timezone.",1],[10,"asctime","","Returns a TmFmt that outputs according to the `asctime` format in ISO\nC.",1],[10,"strftime","","Formats the time according to the format string.",1],[10,"rfc822","","Returns a TmFmt that outputs according to RFC 822.",1],[10,"rfc822z","","Returns a TmFmt that outputs according to RFC 822 with Zulu time.",1],[10,"rfc3339","","Returns a TmFmt that outputs according to RFC 3339. RFC 3339 is\ncompatible with ISO 8601.",1],[10,"eq","","",2],[10,"ne","","",2],[10,"fmt","","",2],[10,"fmt","","",3]],"paths":[[1,"Timespec"],[1,"Tm"],[2,"ParseError"],[1,"TmFmt"]]};

searchIndex['gcc'] = {"items":[[0,"","gcc",""],[1,"Config","","Extra configuration to pass to gcc."],[11,"include_directories","","Directories where gcc will look for header files.",0],[11,"definitions","","Additional definitions (`-DKEY` or `-DKEY=VALUE`).",0],[11,"objects","","Additional object files to link into the final archive",0],[3,"compile_library","","Compile a library from the given set of input C files."],[10,"default","","",0]],"paths":[[1,"Config"]]};

initSearch(searchIndex);