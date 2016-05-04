
extern zend_class_entry *zmailer_zmailer_ce;

ZEPHIR_INIT_CLASS(ZMailer_ZMailer);

PHP_METHOD(ZMailer_ZMailer, setParams);
PHP_METHOD(ZMailer_ZMailer, setParam);
PHP_METHOD(ZMailer_ZMailer, connect);
PHP_METHOD(ZMailer_ZMailer, auth);
PHP_METHOD(ZMailer_ZMailer, RFCDate);
PHP_METHOD(ZMailer_ZMailer, setFrom);
PHP_METHOD(ZMailer_ZMailer, replyTo);
PHP_METHOD(ZMailer_ZMailer, msg);
PHP_METHOD(ZMailer_ZMailer, send);
PHP_METHOD(ZMailer_ZMailer, serverHostname);
PHP_METHOD(ZMailer_ZMailer, sendRecipients);
PHP_METHOD(ZMailer_ZMailer, setRecipients);
PHP_METHOD(ZMailer_ZMailer, addTo);
PHP_METHOD(ZMailer_ZMailer, clearRecipients);
PHP_METHOD(ZMailer_ZMailer, addCC);
PHP_METHOD(ZMailer_ZMailer, clearCC);
PHP_METHOD(ZMailer_ZMailer, addBCC);
PHP_METHOD(ZMailer_ZMailer, clearBCC);
PHP_METHOD(ZMailer_ZMailer, addAttachment);
PHP_METHOD(ZMailer_ZMailer, clearAttachments);
PHP_METHOD(ZMailer_ZMailer, isHTML);
PHP_METHOD(ZMailer_ZMailer, multipartMessage);
PHP_METHOD(ZMailer_ZMailer, generateBoundary);
PHP_METHOD(ZMailer_ZMailer, getMailAddr);
PHP_METHOD(ZMailer_ZMailer, randID);
PHP_METHOD(ZMailer_ZMailer, sendServer);
PHP_METHOD(ZMailer_ZMailer, getServerResponse);
PHP_METHOD(ZMailer_ZMailer, strip_html_tags);
PHP_METHOD(ZMailer_ZMailer, debug);
PHP_METHOD(ZMailer_ZMailer, __destruct);
zend_object_value zephir_init_properties_ZMailer_ZMailer(zend_class_entry *class_type TSRMLS_DC);

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_setparams, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, parameters, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_setparam, 0, 0, 2)
	ZEND_ARG_INFO(0, key)
	ZEND_ARG_INFO(0, value)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_setfrom, 0, 0, 1)
	ZEND_ARG_INFO(0, address)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_replyto, 0, 0, 1)
	ZEND_ARG_INFO(0, address)
	ZEND_ARG_INFO(0, name)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_msg, 0, 0, 1)
	ZEND_ARG_INFO(0, message)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_send, 0, 0, 0)
	ZEND_ARG_INFO(0, headers)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_sendrecipients, 0, 0, 1)
	ZEND_ARG_INFO(0, r)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_setrecipients, 0, 0, 0)
	ZEND_ARG_INFO(0, to)
	ZEND_ARG_INFO(0, toName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_addto, 0, 0, 1)
	ZEND_ARG_INFO(0, recipient)
	ZEND_ARG_INFO(0, recipientName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_addcc, 0, 0, 1)
	ZEND_ARG_INFO(0, c)
	ZEND_ARG_INFO(0, cName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_addbcc, 0, 0, 1)
	ZEND_ARG_INFO(0, bc)
	ZEND_ARG_INFO(0, bcName)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_addattachment, 0, 0, 1)
	ZEND_ARG_INFO(0, filePath)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_multipartmessage, 0, 0, 2)
	ZEND_ARG_INFO(0, htmlpart)
	ZEND_ARG_INFO(0, boundary)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_getmailaddr, 0, 0, 1)
	ZEND_ARG_INFO(0, emailaddr)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_randid, 0, 0, 1)
	ZEND_ARG_INFO(0, len)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_sendserver, 0, 0, 2)
	ZEND_ARG_INFO(0, conn)
	ZEND_ARG_INFO(0, data)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_zmailer_zmailer_strip_html_tags, 0, 0, 1)
	ZEND_ARG_INFO(0, text)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(zmailer_zmailer_method_entry) {
	PHP_ME(ZMailer_ZMailer, setParams, arginfo_zmailer_zmailer_setparams, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, setParam, arginfo_zmailer_zmailer_setparam, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, connect, NULL, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, auth, NULL, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, RFCDate, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, setFrom, arginfo_zmailer_zmailer_setfrom, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, replyTo, arginfo_zmailer_zmailer_replyto, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, msg, arginfo_zmailer_zmailer_msg, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, send, arginfo_zmailer_zmailer_send, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, serverHostname, NULL, ZEND_ACC_PROTECTED)
	PHP_ME(ZMailer_ZMailer, sendRecipients, arginfo_zmailer_zmailer_sendrecipients, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, setRecipients, arginfo_zmailer_zmailer_setrecipients, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, addTo, arginfo_zmailer_zmailer_addto, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, clearRecipients, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, addCC, arginfo_zmailer_zmailer_addcc, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, clearCC, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, addBCC, arginfo_zmailer_zmailer_addbcc, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, clearBCC, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, addAttachment, arginfo_zmailer_zmailer_addattachment, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, clearAttachments, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, isHTML, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, multipartMessage, arginfo_zmailer_zmailer_multipartmessage, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, generateBoundary, NULL, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, getMailAddr, arginfo_zmailer_zmailer_getmailaddr, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, randID, arginfo_zmailer_zmailer_randid, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, sendServer, arginfo_zmailer_zmailer_sendserver, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, getServerResponse, NULL, ZEND_ACC_PRIVATE)
	PHP_ME(ZMailer_ZMailer, strip_html_tags, arginfo_zmailer_zmailer_strip_html_tags, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, debug, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(ZMailer_ZMailer, __destruct, NULL, ZEND_ACC_PUBLIC|ZEND_ACC_DTOR)
	PHP_FE_END
};
