#![crate_name = "irc"]
#![crate_type = "dylib"]
#![feature(slicing_syntax)]

#![allow(missing_copy_implementations, unstable)]
#![deny(unused_must_use, warnings, unused_variables, unused_mut)]

#[cfg(test)] extern crate test;
#[macro_use] extern crate log;

// pub use self::message::IrcMessage;
pub use self::connection::IrcConnectionBuf;
pub use self::connection::IrcConnectionCommand;
pub use self::event::IrcEvent;

pub use self::watchers::{
    RegisterError,
    RegisterErrorType,

    JoinResult,
    JoinSuccess,
    JoinError,

    WhoResult,
    WhoRecord,
    WhoSuccess,
    WhoError,

    BundlerManager,
    JoinBundlerTrigger,
    WhoBundlerTrigger,
};

pub use self::irccase::{
    IrcAsciiExt,
    OwnedIrcAsciiExt,
};

pub use self::state::{
    User,
    UserId,

    Channel,
    ChannelId,

    State,
    MessageEndpoint,
};

#[cfg(test)] pub mod testinfra;
mod numerics;
mod connection;
// mod message;
mod watchers;
mod core_plugins;

#[experimental = "Subject to all types of change"]
/// Experimental message types
pub mod message_types;

#[experimental = "Subject to being moved"]
/// Experimental utility code
pub mod util;

#[experimental = "Subject to being moved"]
/// Experimental parsing code
pub mod parse;

#[experimental = "Subject to all types of change"]
pub mod identifier;

/// Event types
mod event;

/// IRC case manipulation
mod irccase;

/// IRC state tracker
mod state;
