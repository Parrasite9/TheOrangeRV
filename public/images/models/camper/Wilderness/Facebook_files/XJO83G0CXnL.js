;/*FB_PKG_DELIM*/

__d("MDBCClientEvent",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({THREAD_OPEN:1,CHAT_JOIN_SHEET_RENDERED:2,THREAD_JOIN:3,BROADCAST_BUTTON_RENDERED:4,RENDER_PUBLIC_BROADCAST_CHAT_NUX_QP:5,RENDER_PUBLIC_BROADCAST_CHAT_CREATION_SHEET:6,PUBLIC_BROADCAST_CHAT_CREATION_SHEET_RENDERED:7,THREAD_CREATE:8,SHARE_SHEET_RENDERED:9,COPY_LINK:10,EDIT_CHAT:11,SHARE_LINK:12,RENDER_THREAD_DETAIL:13,MUTE_CHAT:14,RENDER_CHAT_MEMBERS:15,SEEN_COUNT_RENDERED:16,SHARE_LINK_SENT:17,THREAD_SETTINGS_RENDERED:18,REPORT_MESSAGE_TO_META:19,REMOVE_MESSAGE:20,ADMIN_REMOVE_MESSAGE:21,CHAT_RENDERED_IN_MIB_INBOX:22,BLOCK_FROM_CHAT:23,DEMOTE_ADMIN_BUTTON_TAPPED:24,PROMOTE_ADMIN_FAIL_IMPRESSION:25,REMOVE_FROM_CHAT:26,MESSAGE_USER:27,VIEW_USER_PROFILE:28,ADMIN_LIMIT_REACHED_IMPRESSION:29,PROMOTE_ADMIN_BUTTON_TAPPED:30,USER_PROFILE_BOTTOMSHEET:31,BAN_FROM_CHAT_SUCCESS:32,BAN_FROM_CHAT_FAILURE:33,BAN_FROM_CHAT_INITIATION:34,NOTIFICATION_CONTROL_MUTE_SELECTED:35,NOTIFICATION_CONTROL_UNMUTE_SELECTED:36,JOIN_CHAT_CONFIRM:37,SHOW_ON_PROFILE_TOGGLE:38,SHOW_ON_PROFILE_TAPPED:39,LEAVE_CHAT:40,DELETE_CHAT:41,UNMUTE_CHAT:42,REPORTED_CONTENTS_RENDERED:43,INVITE_BUTTON_TAPPED:44,VIEW_ALL_MEMBERS:45,OPEN_INVITE_LINK_VIEW:46,REPORT_CHAT_TO_FACEBOOK:47,DISMISS_BUTTON_TAPPED:48,JOIN_CHAT_SHEET_RENDERED:49,MESSAGE_SEND:50,PUSH_NOTIFICATION_MESSAGE_RECEIVED_TAPPED:51,CREATE_CHANNEL_SCREEN_RENDERED:52,CHANGE_IMAGE_TAPPED:53,JOIN_APPROVAL_TOGGLE:54,COPY_LINK_TAPPED:55,SEARCH_BAR_INPUT_FOCUS:56,INVITE_SCREEN_RENDERED:57,DONE_BUTTON_TAPPED:58,SEND_BUTTON_TAPPED:59,SHARE_TO_FEED_SKIPPED:60,SHARE_TO_FEED_SCREEN_RENDERED:61,POST_TEXT_INPUT:62,SHARE_TO_FEED_BUTTON_TAPPED:63,NAME_TEXT_INPUT:64,EDIT_CHAT_SUCCESS:65,EDIT_CHAT_FAILURE:66,REQUIRE_APPROVAL_TO_JOIN_DISABLED:67,REQUIRE_APPROVAL_TO_JOIN_ENABLED:68,MEMBER_REQUEST_JOIN_APPROVED:69,MEMBER_REQUEST_JOIN_DENIED:70,VIEW_MEMBER_REQUESTS:71,SHARE_TO_FACEBOOK_BOTTOMSHEET_VIEWED:72,CHAT_SHARED_TO_FACEBOOK:73,EDIT_CHAT_DESCRIPTION:74,CHANGE_THREAD_PHOTO:75,INSTALL_MESSENGER_UPSELL_VIEWED:76,DOWNLOAD_MESSENGER_BUTTON_CLICKED:77,BLOCKED_USER_WARNING_RENDERED:78,BLOCKED_USER_WARNING_CONFIRM:79,NOTIF_IMPRESSION:80,NOTIF_CLICKED:81,FIRST_CREATE_BOTTOMSHEET_RENDERED:82,THREAD_CREATE_ATTEMPT:83,PUBLIC_CHAT_LINK_ATTACHMENT_RENDERED:84,PUBLIC_CHAT_LINK_ATTACHMENT_TAPPED:85,NOTIFICATION_CONTROL_ALL_SELECTED:86,NOTIFICATION_CONTROL_MENTIONS_AND_REPLIES_SELECTED:87,NOTIFICATION_CONTROL_NONE_SELECTED:88,NOTIFICATION_CONTROL_RENDERED:89,UNDO_BUTTON_TAPPED:90,INVITE_SENT_SUCCESS:91,INVITE_SENT_FAILED:92,PRIMARY_PROFILE_QP_RENDERED:93,NOT_NOW_TAPPED:94,CREATE_CHANNEL_TAPPED:95,VIEW_PINNED_CHANNELS:96,PROFILE_ABOUT_CHANNEL_SECTION_RENDERED:97,DIRECT_INVITE_SENT_SUCCESS:98,DIRECT_INVITE_SENT_FAIL:99,DIRECT_INVITE_BULK_SENT_SUCCESS:100,DIRECT_INVITE_BULK_SENT_FAIL:101,DIRECT_INVITE_NOTIFICATION_RENDERED:102,DIRECT_INVITE_SHEET_RENDERED:103,INVITE_ACCEPT:104,INVITE_DECLINE:105,CHAT_INVITE_SHEET_RENDERED:106,PAUSE_CHANNEL:107,RESUME_CHANNEL:108,THREAD_CREATE_SUCCESS:109,THREAD_CREATE_ERROR:110,NOTIFICATION_RENDERING_REQUEST_SUCCESS:111,NOTIFICATION_RECALLED:112,NOTIFICATION_DISMISS:113,NOTIFICATION_CLICK:114,FEATURED_UNIT_PROFILE_QP_RENDERED:115,PIN_CARD_TAPPED:116,PIN_FEATURED_CARD_SUCCESS:117,PIN_FEATURED_CARD_FAILURE:118,CHANNELS_FEATURED_UNIT_RENDERED:119,CHANNELS_FEATURED_UNIT_SEE_ALL_TAPPED:120,RENDER_CHAT_INVITE_SHEET:121,RENDER_INVITE_PRESET_LIST:122,INVITE_PRESET_LIST_RENDERED:123,CREATE_POST_BUTTON_TAPPED:124,RENDER_CHANNEL_PAUSE_CONFIRMATION_DIALOG:125,RENDER_CHANNEL_RESUME_CONFIRMATION_DIALOG:126,DISMISS_PAUSE_CHANNEL_DIALOG:127,DISMISS_RESUME_CHANNEL_DIALOG:128,CANCEL_RESUME_CHANNEL:129,CANCEL_PAUSE_CHANNEL:130,DEEPLINK_LANDING_PAGE_RENDERED:131,DIRECT_INVITE_SHEET_SKIPPED:132,CREATE_POST_BUTTON:133,CYSC_QP_CARD_IMPRESSION:134,SHOW_ON_PROFILE_RENDERED:135,THREAD_PREVIEW_OPEN:136,NON_MEMBER_COMPOSER_SHOWN:137,REACTIONS_UNEXPECTED_DROP:138,REACTIONS_MUTATION_SUCCESS:139,REACTIONS_MUTATION_FAILURE:140,REACTIONS_TRAY_EMPTY_ERROR:141,SET_CHAT_CREATION_PHOTO:142,SHARE_LINK_TO_FB_CONFIRM:143,BIIM_INBOX_BROADCAST_CREATE_BUTTON_RENDERED:144,BIIM_INBOX_BROADCAST_CREATE_BUTTON_TAPPED:145,PUBLIC_BROADCAST_CHAT_NUX_QP_RENDERED:146,PUBLIC_BROADCAST_CHAT_NUX_QP_TAPPED:147,PIN_FEATURED_CARD_TOGGLE:148,PIN_TO_INBOX_SUCCESS:149,PIN_TO_INBOX_FAILURE:150,UNPIN_FROM_INBOX_SUCCESS:151,UNPIN_FROM_INBOX_FAILURE:152,PINNED_THREAD_RENDERED:153,CHANNELS_TAB_ITEM_RENDERED:154,CHANNELS_TAB_ITEM_TAPPED:155,PROFILE_CHANNELS_TAB_RENDERED:156,PROMPT_ACCOUNT_SWITCH_QP_RENDERED:157,PROMPT_ACCOUNT_SWITCH_QP_CREATE_CHANNEL_TAPPED:158,PROMPT_ACCOUNT_SWITCH_QP_DISMISSED:159,CYSC_NEWSFEED_QP_RENDERED:160,CREATE_CHANNEL_OPTION_RENDERED:161,CHANNELS_LIST_RENDERED:162,CHANNELS_LIST_NULL_STATE_RENDERED:163,PUBLIC_BROADCAST_CHANNEL_APPLUS_QP:164,BROADCAST_CHANNEL_TAPPED:165,MESSENGER_SEARCH_PUBLIC_CHANNEL_RENDERED:166,PROFILE_INTRO_CARD_CHANNEL_RENDERED:167,DIRECT_INVITE_JEWEL_NOTIFICATION_CHANNEL_RENDERED:168,PERSISTENT_INVITE_CHANNEL_RENDERED:169,KEEP_EDITING_BUTTON_TAPPED:170,THREAD_TOMBSTONE_IMPRESSION:171,VIEW_PAGE_STATUS_PRESSED:172,FIRST_CREATE_FULLSCREEN_NUX_RENDERED:173,FIRST_CREATE_FULLSCREEN_NUX_TAPPED:174,DIRECTORY_SEARCH_NULLSTATE_IMPRESSION:175,DIRECTORY_PEOPLE_TAB_IMPRESSION:176,DIRECTORY_OPEN:177,DIRECTORY_FEED_QP_IMPRESSION:178,DIRECTORY_RECOMMENDATION_LIST_IMPRESSION:179,SHARE_BUTTON_ON_THREAD_HEADER:180,DIRECTORY_FEED_SEE_ALL_TAPPED:181,CHANNELS_WAITLIST_RENDERED:182,REQUEST_ACCESS_ATTEMPT:183,LEARN_MORE_TAPPED:184,REQUEST_ACCESS_SUCCESS:185,CHANNELS_SURVERY_RENDERED:186,SUBMIT_SURVEY_ATTEMPT:187,SUBMIT_SURVEY_SUCCESS:188,ALREADY_REGISTERED_VIEW_RENDERED:189,NOT_ELIGIBLE_VIEW_RENDERED:190,LOGGED_OUT_VIEW_RENDERED:191,DISCOVER_CHANNELS_TAPPED:192,CHANNELS_WAITLIST_ACCOUNT_SWITCH_RENDERED:193,WAITLIST_ACCOUNT_SWITCH_ATTEMPT:194,ALREADY_HAS_ACCESS_VIEW_RENDERED:195,MBS_CHANNELS_TAB_IMPRESSION:196,MBS_CHANNELS_TAB_TAPPED:197,MBS_CHANNELS_ENTRYPOINT_BUTTON_IMPRESSION:198,MBS_CHANNELS_ENTRYPOINT_BUTTON_TAPPED:199,WEB_SUBSCRIBE_TO_THREAD_CREATION_STATUS_TABLE:200,WEB_THREAD_CREATION_STATUS_PENDING:201,WEB_SUBSCRIBE_TO_THREADS_TABLE_DURING_CREATE:202,WEB_THREAD_CREATED_WAITING_FOR_THREAD_LINK:203,JOIN_CHAT_NUX_CONFIRM:204,JOIN_CHAT_NUX_CANCEL:205,JOIN_CHAT_NUX_RENDERED:206,MUTE_ON_LEAVE_DIALOG_RENDERED:207,DIRECTORY_FEED_QP_PREVIEW_TAPPED:208,INVITED_AND_DIRECTORY_SCREEN_IMPRESSION:209,INVITED_CHANNELS_SCREEN_IMPRESSION:210,INVITED_AND_DIRECTORY_SCREEN_TAP_SEE_ALL:211,PROMPT_ACCOUNT_SWITCH_QP_ACCOUNT_SWITCH_STARTED:212,PROMPT_ACCOUNT_SWITCH_QP_ACCOUNT_SWITCH_COMPLETED:213,PROMPT_ACCOUNT_SWITCH_QP_CREATION_FLOW_STARTED:214,SHARE_TO_STORY_TAPPED:215,CHANNEL_STICKER_RENDERED:216,BUMP_THREAD_TO_INBOX_TAPPED:217,UNBUMP_THREAD_FROM_INBOX_TAPPED:218,DIRECTORY_FEED_QP_DISMISS_BUTTON_TAPPED:219,MBS_CHANNELS_TAB_WITH_BADGE_IMPRESSION:220,MBS_CHANNELS_TAB_WITH_BADGE_TAPPED:221,EARLY_ACCESS_AWARENESS_SCREEN_IMPRESSION:222,EARLY_ACCESS_AWARENESS_BUTTON_CLICK:223,SHARE_MESSAGE_TO_STORY_TAPPED:224,CHANNEL_MESSAGE_STICKER_RENDERED:225,SHARE_CHANNEL_TO_STORY_BOTTOMSHEET_RENDERED:226,EARLY_ACCESS_BROADCAST_CHANNEL_TOGGLE_RENDERED:227,EARLY_ACCESS_BROADCAST_CHANNEL_TOGGLE_CLICKED:228,EARLY_ACCESS_BROADCAST_CHANNEL_TIME_SETTING_CLICKED:229,EARLY_ACCESS_BROADCAST_CHANNEL_MESSAGE_EDITED:230,EARLY_ACCESS_BROADCAST_CHANNEL_LEARN_MORE_CLICKED:231,FORWARDED_MESSAGE_CHANNEL_CLICK:232,MESSAGE_FORWARD_CLICK:233,VIEW_PINNED_MESSAGES:234,PIN_MESSAGE:235,UNPIN_MESSAGE:236,HIGHLIGHTS_TAB_REACTION_CONTAINER:237,HIGHLIGHTS_TAB_REACTION_PILL:238,SHARE_TO_CHANNELS_ENTRY_POINT_RENDERED:239,SHARE_TO_CHANNELS_ENTRY_POINT_TAPPED:240,SHARE_TO_CHANNELS_PAGE_IMPRESSION:241,SHARE_TO_CHANNELS_CHANNEL_TAPPTED:242,SHARE_TO_CHANNELS_DEFAULT_TOGGLE_CLICKED:243,SHARE_TO_CHANNELS_SHARING_UNAVAILABLE:244,JOIN_TOAST_UNDO_TAPPED:245,MEMBERSHIP_MILESTONE_SCREEN_IMPRESSION:246,MEMBERSHIP_MILESTONE_IMAGE_CARD_TAPPED:247,MEMBERSHIP_MILESTONE_SEND_BUTTON_TAPPED:248,DM_VIEW_CHANNEL_BUTTON:249,MBS_CONTENT_CHANNELS_NULL_STATE_BUTTON_TAPPED:250,MBS_CONTENT_CHANNELS_NULL_STATE_BUTTON_IMPRESSION:251,MBS_CONTENT_CHANNELS_LIST_CHANNEL_TAPPED:252,CHANNELS_GUTTER_UNIT_RENDERED:253,SHARE_POST_TO_BC_EDUCATION_BOTTOMSHEET_IMPRESSION:254,TURN_ON_TAPPED:255,SHARE_POST_TO_BC_SCREEN_IMPRESSION:256,MBS_CONTENT_CHANNELS_NULL_STATE_COMPONENT_IMPRESSION:257,ENGAGEMENT_REMINDER_SCREEN_IMPRESSION:258,ENGAGEMENT_REMINDER_ADD_ATTACHMENT_TAPPED:259,ENGAGEMENT_REMINDER_SEND_BUTTON_TAPPED:260,PUBLIC_BROADCAST_CHANNEL_NUX_CAROUSEL_SLIDE_RENDERED:261,ABOUT_CHANNEL_TAP:262,ABOUT_CHANNEL_VIEW_PAGE_TAP:263,ABOUT_CHANNEL_CLOSE:264,TOP_FAN_PERKS_SETTINGS_BROADCAST_CHANNEL_VIEW_IMPRESSION:265,TOP_FAN_PERKS_SETTINGS_BROADCAST_CHANNEL_VIEW_BUTTON_CLICK:266,BROADCAST_CHANNELS_LEARN_MORE_IMPRESSION:267,BROADCAST_CHANNELS_LEARN_MORE_CONFIRM_BUTTON_CLICK:268,SHARE_TO_STORY_MSGR_TO_FB_DEEPLINK_HANDLED:269,UNJOINED_THREAD_ITEM_TAPPED:270,CONTENT_CHAINING_BUTTON_IMPRESSION:271,CONTENT_CHAINING_BUTTON_CLICKED:272,PIN_POST_TOGGLED_ON:273,PIN_POST_TOGGLED_OFF:274});c=a;f["default"]=c}),66);
__d("MWLogBroadcastChannelFalcoEvent",["I64","emptyFunction","requireDeferred","uuidv4"],(function(a,b,c,d,e,f,g){"use strict";var h,i=c("requireDeferred")("MessengerDiscoverableBroadcastChatsClientEventsFalcoEvent").__setRef("MWLogBroadcastChannelFalcoEvent"),j=new Set([161,119]),k=5*60*1e3,l=null,m=null;function a(a){if(a.current)return c("emptyFunction");a.current=!0;return function(a){return n(a)}}function n(a){var b=a.action,e=b===void 0?1:b,f=a.clientExtras,g=a.event;b=a.parentSurface;var n=b===void 0?3:b,o=a.source,p=a.surface,q=a.threadFbid,r=a.recipientId;i.onReady(function(a){var b=Date.now();(l==null||m!=null&&b-m>k||j.has(g))&&(l=c("uuidv4")());m=b;a.log(function(){return{action:e,action_name:e,event:g,event_name:g,extra:f,parent_surface:n,parent_surface_name:n,recipient_id:r,session_id:l,source:o,source_name:o,surface:p,surface_name:p,thread_id:q!=null?(h||(h=d("I64"))).to_string(q):void 0}})})}g.useLogBroadcastChannelFalcoEventWithRef=a;g.logBroadcastChannelFalcoEvent=n}),98);