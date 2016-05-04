
#ifdef HAVE_CONFIG_H
#include "../ext_config.h"
#endif

#include <php.h>
#include "../php_ext.h"
#include "../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/exit.h"
#include "kernel/memory.h"
#include "kernel/hash.h"
#include "kernel/fcall.h"
#include "kernel/operators.h"
#include "kernel/object.h"
#include "kernel/string.h"
#include "kernel/concat.h"
#include "kernel/array.h"
#include "kernel/file.h"
#include "kernel/time.h"


ZEPHIR_INIT_CLASS(ZMailer_ZMailer) {

	ZEPHIR_REGISTER_CLASS(ZMailer, ZMailer, zmailer, zmailer, zmailer_zmailer_method_entry, 0);

	zend_declare_property_null(zmailer_zmailer_ce, SL("server"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("port"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("username"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("password"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("secure"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_double(zmailer_zmailer_ce, SL("version"), 0.1, ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_bool(zmailer_zmailer_ce, SL("SMTPAuth"), 0, ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("XMailer"), "zMailer", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_long(zmailer_zmailer_ce, SL("Priority"), 3, ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("From"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("FromName"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("ReplyTo"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("ReplyToName"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("Subject"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("Message"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("charset"), "\"utf-8\"", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("contentType"), "multipart/alternative", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("transferEncodeing"), "8bit", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("altBody"), "", ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_bool(zmailer_zmailer_ce, SL("isLogin"), 0, ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("recipients"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("cc"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("bcc"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("attachments"), ZEND_ACC_PUBLIC TSRMLS_CC);

	zend_declare_property_null(zmailer_zmailer_ce, SL("conn"), ZEND_ACC_PRIVATE TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("newline"), "\r\n", ZEND_ACC_PRIVATE TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("localhost"), "localhost", ZEND_ACC_PRIVATE TSRMLS_CC);

	zend_declare_property_string(zmailer_zmailer_ce, SL("timeout"), "15", ZEND_ACC_PRIVATE TSRMLS_CC);

	zend_declare_property_bool(zmailer_zmailer_ce, SL("debug"), 0, ZEND_ACC_PRIVATE TSRMLS_CC);

	zmailer_zmailer_ce->create_object = zephir_init_properties_ZMailer_ZMailer;
	return SUCCESS;

}

PHP_METHOD(ZMailer_ZMailer, setParams) {

	HashTable *_2;
	HashPosition _1;
	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_5 = NULL, *_6 = NULL;
	zval *parameters_param = NULL, *key = NULL, *value = NULL, **_3, _0$$3, *_4$$4 = NULL;
	zval *parameters = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &parameters_param);

	zephir_get_arrval(parameters, parameters_param);


	if (!(Z_TYPE_P(parameters) == IS_ARRAY)) {
		ZEPHIR_MM_RESTORE();
		ZEPHIR_SINIT_VAR(_0$$3);
		ZVAL_STRING(&_0$$3, "Zmail error: Parameters not array", 0);
		zephir_exit(&_0$$3);
	}
	zephir_is_iterable(parameters, &_2, &_1, 0, 0, "zmailer/zmailer.zep", 53);
	for (
	  ; zephir_hash_get_current_data_ex(_2, (void**) &_3, &_1) == SUCCESS
	  ; zephir_hash_move_forward_ex(_2, &_1)
	) {
		ZEPHIR_GET_HMKEY(key, _2, _1);
		ZEPHIR_GET_HVALUE(value, _3);
		ZEPHIR_CALL_FUNCTION(&_4$$4, "property_exists", &_5, 1, this_ptr, key);
		zephir_check_call_status();
		if (zephir_is_true(_4$$4)) {
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "setparam", &_6, 0, key, value);
			zephir_check_call_status();
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, setParam) {

	zval *key, *value;

	zephir_fetch_params(0, 2, 0, &key, &value);



	zephir_update_property_zval_zval(this_ptr, key, value TSRMLS_CC);

}

PHP_METHOD(ZMailer_ZMailer, connect) {

	zval *_0, *_1, *_2, *_5, *_6, *_7, *_8 = NULL, *_9, *_10 = NULL, *_11 = NULL, _12, _13, *_3$$3, *_4$$3;
	int ZEPHIR_LAST_CALL_STATUS;

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(_0);
	ZEPHIR_INIT_VAR(_1);
	_2 = zephir_fetch_nproperty_this(this_ptr, SL("secure"), PH_NOISY_CC);
	zephir_fast_trim(_1, _2, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	zephir_fast_strtolower(_0, _1);
	if (ZEPHIR_IS_STRING(_0, "ssl")) {
		_3$$3 = zephir_fetch_nproperty_this(this_ptr, SL("server"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_4$$3);
		ZEPHIR_CONCAT_SV(_4$$3, "ssl://", _3$$3);
		zephir_update_property_this(this_ptr, SL("server"), _4$$3 TSRMLS_CC);
	}
	_5 = zephir_fetch_nproperty_this(this_ptr, SL("server"), PH_NOISY_CC);
	_6 = zephir_fetch_nproperty_this(this_ptr, SL("port"), PH_NOISY_CC);
	_7 = zephir_fetch_nproperty_this(this_ptr, SL("timeout"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_8);
	ZVAL_NULL(_8);
	ZEPHIR_INIT_VAR(_9);
	ZVAL_NULL(_9);
	ZEPHIR_MAKE_REF(_8);
	ZEPHIR_MAKE_REF(_9);
	ZEPHIR_CALL_FUNCTION(&_10, "fsockopen", NULL, 2, _5, _6, _8, _9, _7);
	ZEPHIR_UNREF(_8);
	ZEPHIR_UNREF(_9);
	zephir_check_call_status();
	zephir_update_property_this(this_ptr, SL("conn"), _10 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(&_11, this_ptr, "getserverresponse", NULL, 3);
	zephir_check_call_status();
	ZEPHIR_SINIT_VAR(_12);
	ZVAL_LONG(&_12, 0);
	ZEPHIR_SINIT_VAR(_13);
	ZVAL_LONG(&_13, 3);
	ZEPHIR_INIT_NVAR(_8);
	zephir_substr(_8, _11, 0 , 3 , 0);
	if (!ZEPHIR_IS_LONG(_8, 220)) {
		RETURN_MM_BOOL(0);
	}
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ZMailer_ZMailer, auth) {

	zval *_0, *_1, *_2, *_3, *_6, *_7, *_8, *_29, *_9$$3, *_10$$3, *_11$$3, *_12$$3 = NULL, _13$$3, _14$$3, *_15$$3, *_16$$3, _17$$3 = zval_used_for_init, _18$$3 = zval_used_for_init, *_20$$3, *_21$$3, *_22$$3, *_23$$3, *_24$$3, *_25$$3, *_26$$3, *_27$$3 = NULL, *_28$$3, *_30$$6, *_31$$6, *_32$$6, *_33$$6 = NULL, _34$$6, _35$$6, *_36$$6, *_37$$6, *_38$$6, *_39$$6 = NULL, *_41$$6, *_42$$6, *_43$$6 = NULL, _44$$6, _45$$6, *_46$$6, *_47$$6, *_48$$6, *_49$$6 = NULL, *_50$$6, *_51$$6, *_52$$6 = NULL, _53$$6, _54$$6, *_55$$6;
	zephir_fcall_cache_entry *_4 = NULL, *_5 = NULL, *_19 = NULL, *_40 = NULL;
	int ZEPHIR_LAST_CALL_STATUS;

	ZEPHIR_MM_GROW();

	_0 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	_1 = zephir_fetch_nproperty_this(this_ptr, SL("localhost"), PH_NOISY_CC);
	_2 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_3);
	ZEPHIR_CONCAT_SVV(_3, "HELO ", _1, _2);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_4, 4, _0, _3);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "getserverresponse", &_5, 3);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(_6);
	ZEPHIR_INIT_VAR(_7);
	_8 = zephir_fetch_nproperty_this(this_ptr, SL("secure"), PH_NOISY_CC);
	zephir_fast_trim(_7, _8, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	zephir_fast_strtolower(_6, _7);
	if (ZEPHIR_IS_STRING(_6, "tls")) {
		_9$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		_10$$3 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_11$$3);
		ZEPHIR_CONCAT_SV(_11$$3, "STARTTLS", _10$$3);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_4, 4, _9$$3, _11$$3);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&_12$$3, this_ptr, "getserverresponse", &_5, 3);
		zephir_check_call_status();
		ZEPHIR_SINIT_VAR(_13$$3);
		ZVAL_LONG(&_13$$3, 0);
		ZEPHIR_SINIT_VAR(_14$$3);
		ZVAL_LONG(&_14$$3, 3);
		ZEPHIR_INIT_VAR(_15$$3);
		zephir_substr(_15$$3, _12$$3, 0 , 3 , 0);
		if (!ZEPHIR_IS_LONG(_15$$3, 220)) {
			RETURN_MM_BOOL(0);
		}
		_16$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		ZEPHIR_SINIT_VAR(_17$$3);
		ZVAL_STRING(&_17$$3, "ssl", 0);
		ZEPHIR_SINIT_VAR(_18$$3);
		ZVAL_STRING(&_18$$3, "verify_peer", 0);
		ZEPHIR_CALL_FUNCTION(NULL, "stream_context_set_option", &_19, 5, _16$$3, &_17$$3, &_18$$3, ZEPHIR_GLOBAL(global_false));
		zephir_check_call_status();
		_20$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		ZEPHIR_SINIT_NVAR(_17$$3);
		ZVAL_STRING(&_17$$3, "ssl", 0);
		ZEPHIR_SINIT_NVAR(_18$$3);
		ZVAL_STRING(&_18$$3, "verify_peer_name", 0);
		ZEPHIR_CALL_FUNCTION(NULL, "stream_context_set_option", &_19, 5, _20$$3, &_17$$3, &_18$$3, ZEPHIR_GLOBAL(global_false));
		zephir_check_call_status();
		_21$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		ZEPHIR_SINIT_NVAR(_17$$3);
		ZVAL_STRING(&_17$$3, "ssl", 0);
		ZEPHIR_SINIT_NVAR(_18$$3);
		ZVAL_STRING(&_18$$3, "allow_self_signed", 0);
		ZEPHIR_CALL_FUNCTION(NULL, "stream_context_set_option", &_19, 5, _21$$3, &_17$$3, &_18$$3, ZEPHIR_GLOBAL(global_true));
		zephir_check_call_status();
		_22$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		ZEPHIR_SINIT_NVAR(_17$$3);
		ZVAL_LONG(&_17$$3, 3);
		ZEPHIR_CALL_FUNCTION(NULL, "stream_socket_enable_crypto", NULL, 6, _22$$3, ZEPHIR_GLOBAL(global_true), &_17$$3);
		zephir_check_call_status();
		_23$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		_24$$3 = zephir_fetch_nproperty_this(this_ptr, SL("localhost"), PH_NOISY_CC);
		_25$$3 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_26$$3);
		ZEPHIR_CONCAT_SVV(_26$$3, "HELO ", _24$$3, _25$$3);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_4, 4, _23$$3, _26$$3);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&_27$$3, this_ptr, "getserverresponse", &_5, 3);
		zephir_check_call_status();
		ZEPHIR_SINIT_NVAR(_17$$3);
		ZVAL_LONG(&_17$$3, 0);
		ZEPHIR_SINIT_NVAR(_18$$3);
		ZVAL_LONG(&_18$$3, 3);
		ZEPHIR_INIT_VAR(_28$$3);
		zephir_substr(_28$$3, _27$$3, 0 , 3 , 0);
		if (!ZEPHIR_IS_LONG(_28$$3, 250)) {
			RETURN_MM_BOOL(0);
		}
	}
	_29 = zephir_fetch_nproperty_this(this_ptr, SL("SMTPAuth"), PH_NOISY_CC);
	if (zephir_is_true(_29)) {
		_30$$6 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		_31$$6 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_32$$6);
		ZEPHIR_CONCAT_SV(_32$$6, "AUTH LOGIN", _31$$6);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_4, 4, _30$$6, _32$$6);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&_33$$6, this_ptr, "getserverresponse", &_5, 3);
		zephir_check_call_status();
		ZEPHIR_SINIT_VAR(_34$$6);
		ZVAL_LONG(&_34$$6, 0);
		ZEPHIR_SINIT_VAR(_35$$6);
		ZVAL_LONG(&_35$$6, 3);
		ZEPHIR_INIT_VAR(_36$$6);
		zephir_substr(_36$$6, _33$$6, 0 , 3 , 0);
		if (!ZEPHIR_IS_LONG(_36$$6, 334)) {
			RETURN_MM_BOOL(0);
		}
		_37$$6 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		_38$$6 = zephir_fetch_nproperty_this(this_ptr, SL("username"), PH_NOISY_CC);
		ZEPHIR_CALL_FUNCTION(&_39$$6, "base64_encode", &_40, 7, _38$$6);
		zephir_check_call_status();
		_41$$6 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_42$$6);
		ZEPHIR_CONCAT_VV(_42$$6, _39$$6, _41$$6);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_4, 4, _37$$6, _42$$6);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&_43$$6, this_ptr, "getserverresponse", &_5, 3);
		zephir_check_call_status();
		ZEPHIR_SINIT_VAR(_44$$6);
		ZVAL_LONG(&_44$$6, 0);
		ZEPHIR_SINIT_VAR(_45$$6);
		ZVAL_LONG(&_45$$6, 3);
		ZEPHIR_INIT_VAR(_46$$6);
		zephir_substr(_46$$6, _43$$6, 0 , 3 , 0);
		if (!ZEPHIR_IS_LONG(_46$$6, 334)) {
			RETURN_MM_BOOL(0);
		}
		_47$$6 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		_48$$6 = zephir_fetch_nproperty_this(this_ptr, SL("password"), PH_NOISY_CC);
		ZEPHIR_CALL_FUNCTION(&_49$$6, "base64_encode", &_40, 7, _48$$6);
		zephir_check_call_status();
		_50$$6 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_51$$6);
		ZEPHIR_CONCAT_VV(_51$$6, _49$$6, _50$$6);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_4, 4, _47$$6, _51$$6);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(&_52$$6, this_ptr, "getserverresponse", &_5, 3);
		zephir_check_call_status();
		ZEPHIR_SINIT_VAR(_53$$6);
		ZVAL_LONG(&_53$$6, 0);
		ZEPHIR_SINIT_VAR(_54$$6);
		ZVAL_LONG(&_54$$6, 3);
		ZEPHIR_INIT_VAR(_55$$6);
		zephir_substr(_55$$6, _52$$6, 0 , 3 , 0);
		if (!ZEPHIR_IS_LONG(_55$$6, 235)) {
			RETURN_MM_BOOL(0);
		}
	}
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ZMailer_ZMailer, RFCDate) {

	double _3;
	zval *tz = NULL, *tzs = NULL, *result = NULL, _0 = zval_used_for_init, *_2 = NULL;
	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_1 = NULL;

	ZEPHIR_MM_GROW();

	ZEPHIR_SINIT_VAR(_0);
	ZVAL_LONG(&_0, 'Z');
	ZEPHIR_CALL_FUNCTION(&tz, "date", &_1, 8, &_0);
	zephir_check_call_status();
	if (ZEPHIR_LT_LONG(tz, 0)) {
		ZEPHIR_INIT_VAR(tzs);
		ZVAL_LONG(tzs, '-');
	} else {
		ZEPHIR_INIT_NVAR(tzs);
		ZVAL_LONG(tzs, '+');
	}
	ZEPHIR_CALL_FUNCTION(&_2, "abs", NULL, 9, tz);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(tz, _2);
	_3 = ((double) ((int) (zephir_safe_div_zval_long(tz, 3600 TSRMLS_CC)) * 100) + zephir_safe_div_double_long((zephir_safe_mod_zval_long(tz, 3600 TSRMLS_CC)), (double) (60) TSRMLS_CC));
	ZEPHIR_INIT_NVAR(tz);
	ZVAL_DOUBLE(tz, _3);
	ZEPHIR_SINIT_NVAR(_0);
	ZVAL_STRING(&_0, "D, j M Y H:i:s", 0);
	ZEPHIR_CALL_FUNCTION(&_2, "date", &_1, 8, &_0);
	zephir_check_call_status();
	ZEPHIR_SINIT_NVAR(_0);
	ZVAL_STRING(&_0, "%s %s%04d", 0);
	ZEPHIR_CALL_FUNCTION(&result, "sprintf", NULL, 10, &_0, _2, tzs, tz);
	zephir_check_call_status();
	RETURN_CCTOR(result);

}

PHP_METHOD(ZMailer_ZMailer, setFrom) {

	zval *address, *name = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &address, &name);

	if (!name) {
		ZEPHIR_INIT_VAR(name);
		ZVAL_STRING(name, "", 1);
	}


	zephir_update_property_this(this_ptr, SL("From"), address TSRMLS_CC);
	zephir_update_property_this(this_ptr, SL("FromName"), name TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, replyTo) {

	zval *address, *name = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &address, &name);

	if (!name) {
		ZEPHIR_INIT_VAR(name);
		ZVAL_STRING(name, "", 1);
	}


	zephir_update_property_this(this_ptr, SL("ReplyTo"), address TSRMLS_CC);
	zephir_update_property_this(this_ptr, SL("ReplyToName"), name TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, msg) {

	zval *message;

	zephir_fetch_params(0, 1, 0, &message);



	zephir_update_property_this(this_ptr, SL("Message"), message TSRMLS_CC);

}

PHP_METHOD(ZMailer_ZMailer, send) {

	zephir_fcall_cache_entry *_58 = NULL, *_59 = NULL, *_61 = NULL;
	int ZEPHIR_LAST_CALL_STATUS;
	zval *headers = NULL, *email = NULL, *message = NULL, *boundary = NULL, *_0 = NULL, *_1 = NULL, *_2 = NULL, *_3, *_4, *_5, *_6, *_7, *_8, *_13 = NULL, *_16, *_17, *_18, *_19, *_20, *_21 = NULL, _22 = zval_used_for_init, *_23 = NULL, *_24, *_25, *_26, *_27, *_32, *_33, *_38, *_47, *_48, *_49, *_50, *_51, *_52, *_53, *_54 = NULL, *_55, *_56, *_57, *_60, *_62, *_63, *_64, *_65, *_66, *_67, *_68 = NULL, _69, *_70, *_9$$5, *_10$$5, *_11$$5, *_12$$5, *_14$$6, *_15$$6, *_28$$7, *_29$$7, *_30$$7, *_31$$7, *_34$$8, *_35$$8, *_36$$8, *_37$$8, *_39$$9 = NULL, *_40$$9, *_41$$9, *_42$$9, *_43$$9, *_44$$10, *_45$$10, *_46$$10;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 1, &headers);

	if (!headers) {
		headers = ZEPHIR_GLOBAL(global_null);
	}


	ZEPHIR_INIT_VAR(message);
	ZVAL_STRING(message, "", 1);
	ZEPHIR_OBS_NVAR(message);
	zephir_read_property_this(&message, this_ptr, SL("Message"), PH_NOISY_CC);
	ZEPHIR_CALL_METHOD(&_0, this_ptr, "connect", NULL, 11);
	zephir_check_call_status();
	if (!(zephir_is_true(_0))) {
		RETURN_MM_NULL();
	}
	ZEPHIR_CALL_METHOD(&_1, this_ptr, "auth", NULL, 12);
	zephir_check_call_status();
	if (!(zephir_is_true(_1))) {
		RETURN_MM_NULL();
	}
	ZEPHIR_CALL_METHOD(&boundary, this_ptr, "generateboundary", NULL, 13);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_2, this_ptr, "rfcdate", NULL, 0);
	zephir_check_call_status();
	_3 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(email);
	ZEPHIR_CONCAT_SVV(email, "Date: ", _2, _3);
	_4 = zephir_fetch_nproperty_this(this_ptr, SL("FromName"), PH_NOISY_CC);
	_5 = zephir_fetch_nproperty_this(this_ptr, SL("From"), PH_NOISY_CC);
	_6 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_7);
	ZEPHIR_CONCAT_SVSVSV(_7, "From: \"", _4, "\" <", _5, ">", _6);
	zephir_concat_self(&email, _7 TSRMLS_CC);
	_8 = zephir_fetch_nproperty_this(this_ptr, SL("ReplyTo"), PH_NOISY_CC);
	if (zephir_is_true(_8)) {
		_9$$5 = zephir_fetch_nproperty_this(this_ptr, SL("ReplyToName"), PH_NOISY_CC);
		_10$$5 = zephir_fetch_nproperty_this(this_ptr, SL("ReplyTo"), PH_NOISY_CC);
		_11$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_12$$5);
		ZEPHIR_CONCAT_SVSVSV(_12$$5, "Reply-To: \"", _9$$5, "\" <", _10$$5, ">", _11$$5);
		zephir_concat_self(&email, _12$$5 TSRMLS_CC);
	}
	ZEPHIR_CALL_METHOD(&_13, this_ptr, "setrecipients", NULL, 14);
	zephir_check_call_status();
	zephir_concat_self(&email, _13 TSRMLS_CC);
	if (Z_TYPE_P(headers) != IS_NULL) {
		_14$$6 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_15$$6);
		ZEPHIR_CONCAT_VV(_15$$6, headers, _14$$6);
		zephir_concat_self(&email, _15$$6 TSRMLS_CC);
	}
	_16 = zephir_fetch_nproperty_this(this_ptr, SL("Subject"), PH_NOISY_CC);
	_17 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_18);
	ZEPHIR_CONCAT_SVV(_18, "Subject: ", _16, _17);
	zephir_concat_self(&email, _18 TSRMLS_CC);
	_19 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_20);
	ZEPHIR_CONCAT_SV(_20, "MIME-Version: 1.0", _19);
	zephir_concat_self(&email, _20 TSRMLS_CC);
	ZEPHIR_CALL_METHOD(&_21, this_ptr, "serverhostname", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_SINIT_VAR(_22);
	ZVAL_STRING(&_22, "<%s@%s>", 0);
	ZEPHIR_CALL_FUNCTION(&_23, "sprintf", NULL, 10, &_22, boundary, _21);
	zephir_check_call_status();
	_24 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_25);
	ZEPHIR_CONCAT_SVV(_25, "Message-ID: ", _23, _24);
	zephir_concat_self(&email, _25 TSRMLS_CC);
	ZEPHIR_INIT_VAR(_26);
	_27 = zephir_fetch_nproperty_this(this_ptr, SL("XMailer"), PH_NOISY_CC);
	zephir_fast_trim(_26, _27, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	if (!ZEPHIR_IS_STRING(_26, "")) {
		ZEPHIR_INIT_VAR(_28$$7);
		_29$$7 = zephir_fetch_nproperty_this(this_ptr, SL("XMailer"), PH_NOISY_CC);
		zephir_fast_trim(_28$$7, _29$$7, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
		_30$$7 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_31$$7);
		ZEPHIR_CONCAT_SVV(_31$$7, "X-Mailer: ", _28$$7, _30$$7);
		zephir_concat_self(&email, _31$$7 TSRMLS_CC);
	}
	ZEPHIR_INIT_VAR(_32);
	_33 = zephir_fetch_nproperty_this(this_ptr, SL("Priority"), PH_NOISY_CC);
	zephir_fast_trim(_32, _33, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	if (!ZEPHIR_IS_STRING(_32, "")) {
		ZEPHIR_INIT_VAR(_34$$8);
		_35$$8 = zephir_fetch_nproperty_this(this_ptr, SL("Priority"), PH_NOISY_CC);
		zephir_fast_trim(_34$$8, _35$$8, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
		_36$$8 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_37$$8);
		ZEPHIR_CONCAT_SVV(_37$$8, "X-Priority: ", _34$$8, _36$$8);
		zephir_concat_self(&email, _37$$8 TSRMLS_CC);
	}
	_38 = zephir_fetch_nproperty_this(this_ptr, SL("contentType"), PH_NOISY_CC);
	if (ZEPHIR_IS_STRING(_38, "multipart/alternative")) {
		ZEPHIR_CALL_METHOD(&_39$$9, this_ptr, "multipartmessage", NULL, 15, message, boundary);
		zephir_check_call_status();
		ZEPHIR_CPY_WRT(message, _39$$9);
		_40$$9 = zephir_fetch_nproperty_this(this_ptr, SL("contentType"), PH_NOISY_CC);
		_41$$9 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_42$$9);
		ZEPHIR_CONCAT_SVSV(_42$$9, "Content-Type: ", _40$$9, ";", _41$$9);
		zephir_concat_self(&email, _42$$9 TSRMLS_CC);
		ZEPHIR_INIT_VAR(_43$$9);
		ZEPHIR_CONCAT_SVS(_43$$9, "    boundary=\"", boundary, "\"");
		zephir_concat_self(&email, _43$$9 TSRMLS_CC);
	} else {
		_44$$10 = zephir_fetch_nproperty_this(this_ptr, SL("contentType"), PH_NOISY_CC);
		_45$$10 = zephir_fetch_nproperty_this(this_ptr, SL("charset"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_46$$10);
		ZEPHIR_CONCAT_SVSV(_46$$10, "Content-Type: ", _44$$10, "; charset=", _45$$10);
		zephir_concat_self(&email, _46$$10 TSRMLS_CC);
	}
	_47 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	_48 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	_49 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_50);
	ZEPHIR_CONCAT_VVVV(_50, _47, _48, message, _49);
	zephir_concat_self(&email, _50 TSRMLS_CC);
	_51 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_52);
	ZEPHIR_CONCAT_SV(_52, ".", _51);
	zephir_concat_self(&email, _52 TSRMLS_CC);
	_53 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	_55 = zephir_fetch_nproperty_this(this_ptr, SL("From"), PH_NOISY_CC);
	ZEPHIR_CALL_METHOD(&_54, this_ptr, "getmailaddr", NULL, 16, _55);
	zephir_check_call_status();
	_56 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_57);
	ZEPHIR_CONCAT_SVSV(_57, "MAIL FROM: <", _54, ">", _56);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_58, 4, _53, _57);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "getserverresponse", &_59, 3);
	zephir_check_call_status();
	_60 = zephir_fetch_nproperty_this(this_ptr, SL("recipients"), PH_NOISY_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendrecipients", &_61, 17, _60);
	zephir_check_call_status();
	_62 = zephir_fetch_nproperty_this(this_ptr, SL("cc"), PH_NOISY_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendrecipients", &_61, 17, _62);
	zephir_check_call_status();
	_63 = zephir_fetch_nproperty_this(this_ptr, SL("bcc"), PH_NOISY_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendrecipients", &_61, 17, _63);
	zephir_check_call_status();
	_64 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	_65 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_66);
	ZEPHIR_CONCAT_SV(_66, "DATA", _65);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_58, 4, _64, _66);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "getserverresponse", &_59, 3);
	zephir_check_call_status();
	_67 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_58, 4, _67, email);
	zephir_check_call_status();
	ZEPHIR_CALL_METHOD(&_68, this_ptr, "getserverresponse", &_59, 3);
	zephir_check_call_status();
	ZEPHIR_SINIT_NVAR(_22);
	ZVAL_LONG(&_22, 0);
	ZEPHIR_SINIT_VAR(_69);
	ZVAL_LONG(&_69, 3);
	ZEPHIR_INIT_VAR(_70);
	zephir_substr(_70, _68, 0 , 3 , 0);
	if (!ZEPHIR_IS_LONG(_70, 250)) {
		RETURN_MM_BOOL(0);
	}
	RETURN_MM_BOOL(1);

}

PHP_METHOD(ZMailer_ZMailer, serverHostname) {

	zend_bool _1, _3;
	int ZEPHIR_LAST_CALL_STATUS;
	zval *_SERVER, *result = NULL, _0, *_2, *_4 = NULL, _5, *_6 = NULL, _7$$5;

	ZEPHIR_MM_GROW();
	zephir_get_global(&_SERVER, SS("_SERVER") TSRMLS_CC);

	ZEPHIR_INIT_VAR(result);
	ZVAL_STRING(result, "localhost.localdomain", 1);
	ZEPHIR_SINIT_VAR(_0);
	ZVAL_STRING(&_0, "SERVER_NAME", 0);
	_1 = zephir_array_key_exists(_SERVER, &_0 TSRMLS_CC);
	if (_1) {
		ZEPHIR_OBS_VAR(_2);
		zephir_array_fetch_string(&_2, _SERVER, SL("SERVER_NAME"), PH_NOISY, "zmailer/zmailer.zep", 177 TSRMLS_CC);
		_1 = !(ZEPHIR_IS_EMPTY(_2));
	}
	_3 = (zephir_function_exists_ex(SS("gethostname") TSRMLS_CC) == SUCCESS);
	if (_3) {
		ZEPHIR_CALL_FUNCTION(&_4, "gethostname", NULL, 18);
		zephir_check_call_status();
		_3 = !ZEPHIR_IS_FALSE_IDENTICAL(_4);
	}
	ZEPHIR_SINIT_VAR(_5);
	ZVAL_LONG(&_5, 'n');
	ZEPHIR_CALL_FUNCTION(&_6, "php_uname", NULL, 19, &_5);
	zephir_check_call_status();
	if (_1) {
		ZEPHIR_OBS_NVAR(result);
		zephir_array_fetch_string(&result, _SERVER, SL("SERVER_NAME"), PH_NOISY, "zmailer/zmailer.zep", 178 TSRMLS_CC);
	} else if (_3) {
		ZEPHIR_CALL_FUNCTION(&result, "gethostname", NULL, 18);
		zephir_check_call_status();
	} else if (!ZEPHIR_IS_FALSE_IDENTICAL(_6)) {
		ZEPHIR_SINIT_VAR(_7$$5);
		ZVAL_LONG(&_7$$5, 'n');
		ZEPHIR_CALL_FUNCTION(&result, "php_uname", NULL, 19, &_7$$5);
		zephir_check_call_status();
	}
	RETURN_CCTOR(result);

}

PHP_METHOD(ZMailer_ZMailer, sendRecipients) {

	zend_bool _0;
	zephir_fcall_cache_entry *_6 = NULL, *_9 = NULL, *_10 = NULL;
	int ZEPHIR_LAST_CALL_STATUS, _1, _2;
	zval *r, *i = NULL, *_3$$4, *_4$$4 = NULL, *_5$$4, *_7$$4, *_8$$4 = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &r);



	if (ZEPHIR_IS_EMPTY(r)) {
		RETURN_MM_NULL();
	}
	_2 = (zephir_fast_count_int(r TSRMLS_CC) - 1);
	_1 = 0;
	_0 = 0;
	if (_1 <= _2) {
		while (1) {
			if (_0) {
				_1++;
				if (!(_1 <= _2)) {
					break;
				}
			} else {
				_0 = 1;
			}
			ZEPHIR_INIT_NVAR(i);
			ZVAL_LONG(i, _1);
			_3$$4 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
			zephir_array_fetch(&_5$$4, r, i, PH_NOISY | PH_READONLY, "zmailer/zmailer.zep", 192 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(&_4$$4, this_ptr, "getmailaddr", &_6, 16, _5$$4);
			zephir_check_call_status();
			_7$$4 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
			ZEPHIR_INIT_LNVAR(_8$$4);
			ZEPHIR_CONCAT_SVV(_8$$4, "RCPT TO: ", _4$$4, _7$$4);
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", &_9, 4, _3$$4, _8$$4);
			zephir_check_call_status();
			ZEPHIR_CALL_METHOD(NULL, this_ptr, "getserverresponse", &_10, 3);
			zephir_check_call_status();
		}
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, setRecipients) {

	int _4$$4, _5$$4, _17$$6, _18$$6;
	zend_bool _3$$4, _16$$6;
	zval *to = NULL, *toName = NULL, *r = NULL, *i = NULL, *_1, _9, _10, *_11, *_12, *_13, *_14, *_0$$3, *_2$$4, *_6$$5, *_7$$5, *_8$$5 = NULL, *_15$$6, _22$$6, _23$$6, *_24$$6, *_25$$6, *_26$$6, *_19$$7, *_20$$7, *_21$$7 = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 2, &to, &toName);

	if (!to) {
		ZEPHIR_INIT_VAR(to);
		ZVAL_STRING(to, "", 1);
	}
	if (!toName) {
		ZEPHIR_INIT_VAR(toName);
		ZVAL_STRING(toName, "", 1);
	}


	ZEPHIR_INIT_VAR(r);
	ZVAL_STRING(r, "To: ", 1);
	if (!(ZEPHIR_IS_STRING(to, ""))) {
		ZEPHIR_INIT_VAR(_0$$3);
		ZEPHIR_CONCAT_SVSVS(_0$$3, "\"", toName, "\" <", to, ">, ");
		zephir_concat_self(&r, _0$$3 TSRMLS_CC);
	}
	_1 = zephir_fetch_nproperty_this(this_ptr, SL("recipients"), PH_NOISY_CC);
	if (zephir_fast_count_int(_1 TSRMLS_CC) > 0) {
		_2$$4 = zephir_fetch_nproperty_this(this_ptr, SL("recipients"), PH_NOISY_CC);
		_5$$4 = (zephir_fast_count_int(_2$$4 TSRMLS_CC) - 1);
		_4$$4 = 0;
		_3$$4 = 0;
		if (_4$$4 <= _5$$4) {
			while (1) {
				if (_3$$4) {
					_4$$4++;
					if (!(_4$$4 <= _5$$4)) {
						break;
					}
				} else {
					_3$$4 = 1;
				}
				ZEPHIR_INIT_NVAR(i);
				ZVAL_LONG(i, _4$$4);
				_6$$5 = zephir_fetch_nproperty_this(this_ptr, SL("recipients"), PH_NOISY_CC);
				zephir_array_fetch(&_7$$5, _6$$5, i, PH_NOISY | PH_READONLY, "zmailer/zmailer.zep", 203 TSRMLS_CC);
				ZEPHIR_INIT_LNVAR(_8$$5);
				ZEPHIR_CONCAT_VS(_8$$5, _7$$5, ",");
				zephir_concat_self(&r, _8$$5 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_SINIT_VAR(_9);
	ZVAL_LONG(&_9, 0);
	ZEPHIR_SINIT_VAR(_10);
	ZVAL_LONG(&_10, -1);
	ZEPHIR_INIT_VAR(_11);
	zephir_substr(_11, r, 0 , -1 , 0);
	_12 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_13);
	ZEPHIR_CONCAT_VV(_13, _11, _12);
	ZEPHIR_CPY_WRT(r, _13);
	_14 = zephir_fetch_nproperty_this(this_ptr, SL("cc"), PH_NOISY_CC);
	if (zephir_fast_count_int(_14 TSRMLS_CC) > 0) {
		zephir_concat_self_str(&r, SL("CC: ") TSRMLS_CC);
		_15$$6 = zephir_fetch_nproperty_this(this_ptr, SL("cc"), PH_NOISY_CC);
		_18$$6 = (zephir_fast_count_int(_15$$6 TSRMLS_CC) - 1);
		_17$$6 = 0;
		_16$$6 = 0;
		if (_17$$6 <= _18$$6) {
			while (1) {
				if (_16$$6) {
					_17$$6++;
					if (!(_17$$6 <= _18$$6)) {
						break;
					}
				} else {
					_16$$6 = 1;
				}
				ZEPHIR_INIT_NVAR(i);
				ZVAL_LONG(i, _17$$6);
				_19$$7 = zephir_fetch_nproperty_this(this_ptr, SL("cc"), PH_NOISY_CC);
				zephir_array_fetch(&_20$$7, _19$$7, i, PH_NOISY | PH_READONLY, "zmailer/zmailer.zep", 210 TSRMLS_CC);
				ZEPHIR_INIT_LNVAR(_21$$7);
				ZEPHIR_CONCAT_VS(_21$$7, _20$$7, ",");
				zephir_concat_self(&r, _21$$7 TSRMLS_CC);
			}
		}
		ZEPHIR_SINIT_VAR(_22$$6);
		ZVAL_LONG(&_22$$6, 0);
		ZEPHIR_SINIT_VAR(_23$$6);
		ZVAL_LONG(&_23$$6, -1);
		ZEPHIR_INIT_VAR(_24$$6);
		zephir_substr(_24$$6, r, 0 , -1 , 0);
		_25$$6 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_26$$6);
		ZEPHIR_CONCAT_VV(_26$$6, _24$$6, _25$$6);
		ZEPHIR_CPY_WRT(r, _26$$6);
	}
	RETURN_CCTOR(r);

}

PHP_METHOD(ZMailer_ZMailer, addTo) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *recipient, *recipientName = NULL, *_0, *_1, *_2 = NULL, *_3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &recipient, &recipientName);

	if (!recipientName) {
		ZEPHIR_INIT_VAR(recipientName);
		ZVAL_STRING(recipientName, "", 1);
	} else {
		ZEPHIR_SEPARATE_PARAM(recipientName);
	}


	ZEPHIR_INIT_VAR(_0);
	ZVAL_STRING(_0, "/[\r\n]+/", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_INIT_VAR(_1);
	ZVAL_STRING(_1, "", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_CALL_FUNCTION(&_2, "preg_replace", NULL, 20, _0, _1, recipientName);
	zephir_check_temp_parameter(_0);
	zephir_check_temp_parameter(_1);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(recipientName);
	zephir_fast_trim(recipientName, _2, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	ZEPHIR_INIT_VAR(_3);
	ZEPHIR_CONCAT_SVSVS(_3, "\"", recipientName, "\" <", recipient, ">");
	zephir_update_property_array_append(this_ptr, SL("recipients"), _3 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, clearRecipients) {

	zval *_0;

	ZEPHIR_MM_GROW();

	zephir_unset_property(this_ptr, "recipients" TSRMLS_CC);
	ZEPHIR_INIT_VAR(_0);
	array_init(_0);
	zephir_update_property_this(this_ptr, SL("recipients"), _0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, addCC) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *c, *cName = NULL, *_0, *_1, *_2 = NULL, *_3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &c, &cName);

	if (!cName) {
		ZEPHIR_INIT_VAR(cName);
		ZVAL_STRING(cName, "", 1);
	} else {
		ZEPHIR_SEPARATE_PARAM(cName);
	}


	ZEPHIR_INIT_VAR(_0);
	ZVAL_STRING(_0, "/[\r\n]+/", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_INIT_VAR(_1);
	ZVAL_STRING(_1, "", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_CALL_FUNCTION(&_2, "preg_replace", NULL, 20, _0, _1, cName);
	zephir_check_temp_parameter(_0);
	zephir_check_temp_parameter(_1);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(cName);
	zephir_fast_trim(cName, _2, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	ZEPHIR_INIT_VAR(_3);
	ZEPHIR_CONCAT_SVSVS(_3, "\"", cName, "\" <", c, ">");
	zephir_update_property_array_append(this_ptr, SL("cc"), _3 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, clearCC) {

	zval *_0;

	ZEPHIR_MM_GROW();

	zephir_unset_property(this_ptr, "cc" TSRMLS_CC);
	ZEPHIR_INIT_VAR(_0);
	array_init(_0);
	zephir_update_property_this(this_ptr, SL("cc"), _0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, addBCC) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *bc, *bcName = NULL, *_0, *_1, *_2 = NULL, *_3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 1, &bc, &bcName);

	if (!bcName) {
		ZEPHIR_INIT_VAR(bcName);
		ZVAL_STRING(bcName, "", 1);
	} else {
		ZEPHIR_SEPARATE_PARAM(bcName);
	}


	ZEPHIR_INIT_VAR(_0);
	ZVAL_STRING(_0, "/[\r\n]+/", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_INIT_VAR(_1);
	ZVAL_STRING(_1, "", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_CALL_FUNCTION(&_2, "preg_replace", NULL, 20, _0, _1, bcName);
	zephir_check_temp_parameter(_0);
	zephir_check_temp_parameter(_1);
	zephir_check_call_status();
	ZEPHIR_INIT_NVAR(bcName);
	zephir_fast_trim(bcName, _2, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	ZEPHIR_INIT_VAR(_3);
	ZEPHIR_CONCAT_SVSVS(_3, "\"", bcName, "\" <", bc, ">");
	zephir_update_property_array_append(this_ptr, SL("bcc"), _3 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, clearBCC) {

	zval *_0;

	ZEPHIR_MM_GROW();

	zephir_unset_property(this_ptr, "bcc" TSRMLS_CC);
	ZEPHIR_INIT_VAR(_0);
	array_init(_0);
	zephir_update_property_this(this_ptr, SL("bcc"), _0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, addAttachment) {

	zval *filePath;

	zephir_fetch_params(0, 1, 0, &filePath);



	zephir_update_property_array_append(this_ptr, SL("attachments"), filePath TSRMLS_CC);

}

PHP_METHOD(ZMailer_ZMailer, clearAttachments) {

	zval *_0;

	ZEPHIR_MM_GROW();

	zephir_unset_property(this_ptr, "attachments" TSRMLS_CC);
	ZEPHIR_INIT_VAR(_0);
	array_init(_0);
	zephir_update_property_this(this_ptr, SL("attachments"), _0 TSRMLS_CC);
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, isHTML) {

	zval *_0;


	ZEPHIR_INIT_ZVAL_NREF(_0);
	ZVAL_STRING(_0, "text/html", 1);
	zephir_update_property_this(this_ptr, SL("contentType"), _0 TSRMLS_CC);

}

PHP_METHOD(ZMailer_ZMailer, multipartMessage) {

	zend_bool _29$$4;
	zephir_fcall_cache_entry *_36 = NULL, *_37 = NULL, *_41 = NULL;
	int ZEPHIR_LAST_CALL_STATUS, _30$$4, _31$$4;
	zval *htmlpart, *boundary, *parts = NULL, *altBoundary = NULL, *i = NULL, *attachment = NULL, *filename = NULL, *ext = NULL, *message = NULL, *_0, *_2, *_3, *_4, *_5, *_6, *_7, *_8, *_9, *_10, *_11, *_12, *_13, *_14, *_15, *_16, *_17, *_18, *_19, *_20, *_21, *_22, *_23, *_24, *_25, *_26, *_27, *_53, *_1$$3 = NULL, *_28$$4, *_32$$5 = NULL, *_33$$5, *_34$$5, *_35$$5 = NULL, *_38$$5, *_39$$5, _40$$5 = zval_used_for_init, *_42$$5, *_43$$5 = NULL, *_44$$5, *_45$$5 = NULL, *_46$$5, *_47$$5 = NULL, *_48$$5, *_49$$5, *_50$$5 = NULL, *_51$$5, *_52$$5 = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &htmlpart, &boundary);



	_0 = zephir_fetch_nproperty_this(this_ptr, SL("altBody"), PH_NOISY_CC);
	if (ZEPHIR_IS_STRING(_0, "")) {
		ZEPHIR_CALL_METHOD(&_1$$3, this_ptr, "strip_html_tags", NULL, 0, htmlpart);
		zephir_check_call_status();
		zephir_update_property_this(this_ptr, SL("altBody"), _1$$3 TSRMLS_CC);
	}
	ZEPHIR_CPY_WRT(altBoundary, boundary);
	ZEPHIR_CALL_FUNCTION(NULL, "ob_start", NULL, 21);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(parts);
	ZVAL_STRING(parts, "", 1);
	_2 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_3);
	ZEPHIR_CONCAT_SVV(_3, "--", altBoundary, _2);
	zephir_concat_self(&parts, _3 TSRMLS_CC);
	_4 = zephir_fetch_nproperty_this(this_ptr, SL("charset"), PH_NOISY_CC);
	_5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_6);
	ZEPHIR_CONCAT_SVV(_6, "Content-Type: text/plain; charset=", _4, _5);
	zephir_concat_self(&parts, _6 TSRMLS_CC);
	_7 = zephir_fetch_nproperty_this(this_ptr, SL("transferEncodeing"), PH_NOISY_CC);
	_8 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	_9 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_10);
	ZEPHIR_CONCAT_SVVV(_10, "Content-Transfer-Encoding: ", _7, _8, _9);
	zephir_concat_self(&parts, _10 TSRMLS_CC);
	_11 = zephir_fetch_nproperty_this(this_ptr, SL("altBody"), PH_NOISY_CC);
	_12 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	_13 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_14);
	ZEPHIR_CONCAT_VVV(_14, _11, _12, _13);
	zephir_concat_self(&parts, _14 TSRMLS_CC);
	_15 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_16);
	ZEPHIR_CONCAT_SVV(_16, "--", altBoundary, _15);
	zephir_concat_self(&parts, _16 TSRMLS_CC);
	_17 = zephir_fetch_nproperty_this(this_ptr, SL("charset"), PH_NOISY_CC);
	_18 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_19);
	ZEPHIR_CONCAT_SVV(_19, "Content-Type: text/html; charset=", _17, _18);
	zephir_concat_self(&parts, _19 TSRMLS_CC);
	_20 = zephir_fetch_nproperty_this(this_ptr, SL("transferEncodeing"), PH_NOISY_CC);
	_21 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	_22 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_23);
	ZEPHIR_CONCAT_SVVV(_23, "Content-Transfer-Encoding: ", _20, _21, _22);
	zephir_concat_self(&parts, _23 TSRMLS_CC);
	_24 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	_25 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
	ZEPHIR_INIT_VAR(_26);
	ZEPHIR_CONCAT_VVV(_26, htmlpart, _24, _25);
	zephir_concat_self(&parts, _26 TSRMLS_CC);
	_27 = zephir_fetch_nproperty_this(this_ptr, SL("attachments"), PH_NOISY_CC);
	if (zephir_fast_count_int(_27 TSRMLS_CC) > 0) {
		_28$$4 = zephir_fetch_nproperty_this(this_ptr, SL("attachments"), PH_NOISY_CC);
		_31$$4 = (zephir_fast_count_int(_28$$4 TSRMLS_CC) - 1);
		_30$$4 = 0;
		_29$$4 = 0;
		if (_30$$4 <= _31$$4) {
			while (1) {
				if (_29$$4) {
					_30$$4++;
					if (!(_30$$4 <= _31$$4)) {
						break;
					}
				} else {
					_29$$4 = 1;
				}
				ZEPHIR_INIT_NVAR(i);
				ZVAL_LONG(i, _30$$4);
				ZEPHIR_INIT_NVAR(_32$$5);
				_33$$5 = zephir_fetch_nproperty_this(this_ptr, SL("attachments"), PH_NOISY_CC);
				zephir_array_fetch(&_34$$5, _33$$5, i, PH_NOISY | PH_READONLY, "zmailer/zmailer.zep", 289 TSRMLS_CC);
				zephir_file_get_contents(_32$$5, _34$$5 TSRMLS_CC);
				ZEPHIR_CALL_FUNCTION(&_35$$5, "base64_encode", &_36, 7, _32$$5);
				zephir_check_call_status();
				ZEPHIR_CALL_FUNCTION(&attachment, "chunk_split", &_37, 22, _35$$5);
				zephir_check_call_status();
				_38$$5 = zephir_fetch_nproperty_this(this_ptr, SL("attachments"), PH_NOISY_CC);
				zephir_array_fetch(&_39$$5, _38$$5, i, PH_NOISY | PH_READONLY, "zmailer/zmailer.zep", 290 TSRMLS_CC);
				ZEPHIR_INIT_NVAR(filename);
				zephir_basename(filename, _39$$5 TSRMLS_CC);
				ZEPHIR_SINIT_NVAR(_40$$5);
				ZVAL_LONG(&_40$$5, 4);
				ZEPHIR_CALL_FUNCTION(&ext, "pathinfo", &_41, 23, filename, &_40$$5);
				zephir_check_call_status();
				_42$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
				ZEPHIR_INIT_LNVAR(_43$$5);
				ZEPHIR_CONCAT_SVV(_43$$5, "--", boundary, _42$$5);
				zephir_concat_self(&parts, _43$$5 TSRMLS_CC);
				_44$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
				ZEPHIR_INIT_LNVAR(_45$$5);
				ZEPHIR_CONCAT_SVSVSV(_45$$5, "Content-Type: application/", ext, "; name=\"", filename, "\"", _44$$5);
				zephir_concat_self(&parts, _45$$5 TSRMLS_CC);
				_46$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
				ZEPHIR_INIT_LNVAR(_47$$5);
				ZEPHIR_CONCAT_SV(_47$$5, "Content-Transfer-Encoding: base64", _46$$5);
				zephir_concat_self(&parts, _47$$5 TSRMLS_CC);
				_48$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
				_49$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
				ZEPHIR_INIT_LNVAR(_50$$5);
				ZEPHIR_CONCAT_SVSVV(_50$$5, "Content-Disposition: attachment; filename=\"", filename, "\"", _48$$5, _49$$5);
				zephir_concat_self(&parts, _50$$5 TSRMLS_CC);
				_51$$5 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
				ZEPHIR_INIT_LNVAR(_52$$5);
				ZEPHIR_CONCAT_VV(_52$$5, attachment, _51$$5);
				zephir_concat_self(&parts, _52$$5 TSRMLS_CC);
			}
		}
	}
	ZEPHIR_INIT_VAR(_53);
	ZEPHIR_CONCAT_SVS(_53, "--", boundary, "--");
	zephir_concat_self(&parts, _53 TSRMLS_CC);
	ZEPHIR_CALL_FUNCTION(&message, "ob_get_clean", NULL, 24);
	zephir_check_call_status();
	RETURN_CCTOR(parts);

}

PHP_METHOD(ZMailer_ZMailer, generateBoundary) {

	zval *_0, *_1 = NULL;
	int ZEPHIR_LAST_CALL_STATUS;

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(_0);
	zephir_time(_0);
	ZEPHIR_CALL_FUNCTION(&_1, "uniqid", NULL, 25, _0);
	zephir_check_call_status();
	zephir_md5(return_value, _1);
	RETURN_MM();

}

PHP_METHOD(ZMailer_ZMailer, getMailAddr) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *emailaddr, *addr = NULL, *strSpace = NULL, _0, _1$$3, *_2$$3 = NULL, _3$$3, _4$$3, _5$$3, _6$$3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &emailaddr);



	ZEPHIR_CPY_WRT(addr, emailaddr);
	ZEPHIR_SINIT_VAR(_0);
	ZVAL_STRING(&_0, " ", 0);
	ZEPHIR_CALL_FUNCTION(&strSpace, "strrpos", NULL, 26, emailaddr, &_0);
	zephir_check_call_status();
	if (ZEPHIR_GT_LONG(strSpace, 0)) {
		ZEPHIR_SINIT_VAR(_1$$3);
		ZVAL_LONG(&_1$$3, (zephir_get_numberval(strSpace) + 1));
		ZEPHIR_INIT_NVAR(addr);
		zephir_substr(addr, emailaddr, zephir_get_intval(&_1$$3), 0, ZEPHIR_SUBSTR_NO_LENGTH);
		ZEPHIR_INIT_VAR(_2$$3);
		ZEPHIR_SINIT_VAR(_3$$3);
		ZVAL_STRING(&_3$$3, "<", 0);
		ZEPHIR_SINIT_VAR(_4$$3);
		ZVAL_STRING(&_4$$3, "", 0);
		zephir_fast_str_replace(&_2$$3, &_3$$3, &_4$$3, addr TSRMLS_CC);
		ZEPHIR_CPY_WRT(addr, _2$$3);
		ZEPHIR_INIT_NVAR(_2$$3);
		ZEPHIR_SINIT_VAR(_5$$3);
		ZVAL_STRING(&_5$$3, ">", 0);
		ZEPHIR_SINIT_VAR(_6$$3);
		ZVAL_STRING(&_6$$3, "", 0);
		zephir_fast_str_replace(&_2$$3, &_5$$3, &_6$$3, addr TSRMLS_CC);
		ZEPHIR_CPY_WRT(addr, _2$$3);
	}
	RETURN_CCTOR(addr);

}

PHP_METHOD(ZMailer_ZMailer, randID) {

	zend_bool _0;
	int ZEPHIR_LAST_CALL_STATUS, _1, _2;
	zephir_fcall_cache_entry *_5 = NULL;
	zval *len, *index = NULL, *out = NULL, *t = NULL, *r = NULL, _3$$3 = zval_used_for_init, _4$$3 = zval_used_for_init, *_6$$3 = NULL, *_7$$3 = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &len);



	ZEPHIR_INIT_VAR(index);
	ZVAL_STRING(index, "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1);
	ZEPHIR_INIT_VAR(out);
	ZVAL_STRING(out, "", 1);
	_2 = (zephir_get_numberval(len) - 1);
	_1 = 0;
	_0 = 0;
	if (_1 <= _2) {
		while (1) {
			if (_0) {
				_1++;
				if (!(_1 <= _2)) {
					break;
				}
			} else {
				_0 = 1;
			}
			ZEPHIR_INIT_NVAR(t);
			ZVAL_LONG(t, _1);
			ZEPHIR_SINIT_NVAR(_3$$3);
			ZVAL_LONG(&_3$$3, 0);
			ZEPHIR_SINIT_NVAR(_4$$3);
			ZVAL_LONG(&_4$$3, 61);
			ZEPHIR_CALL_FUNCTION(&r, "rand", &_5, 27, &_3$$3, &_4$$3);
			zephir_check_call_status();
			ZEPHIR_SINIT_NVAR(_3$$3);
			ZVAL_LONG(&_3$$3, 1);
			ZEPHIR_INIT_NVAR(_6$$3);
			zephir_substr(_6$$3, index, zephir_get_intval(r), 1 , 0);
			ZEPHIR_INIT_LNVAR(_7$$3);
			ZEPHIR_CONCAT_VV(_7$$3, out, _6$$3);
			ZEPHIR_CPY_WRT(out, _7$$3);
		}
	}
	RETURN_CCTOR(out);

}

PHP_METHOD(ZMailer_ZMailer, sendServer) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *conn, *data, *_0, *_1, *_2$$3;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &conn, &data);



	_0 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	ZEPHIR_CALL_FUNCTION(NULL, "fputs", NULL, 28, _0, data);
	zephir_check_call_status();
	_1 = zephir_fetch_nproperty_this(this_ptr, SL("debug"), PH_NOISY_CC);
	if (zephir_is_true(_1)) {
		ZEPHIR_INIT_VAR(_2$$3);
		ZEPHIR_CONCAT_VS(_2$$3, data, "<br>");
		zend_print_zval(_2$$3, 0);
	}
	ZEPHIR_MM_RESTORE();

}

PHP_METHOD(ZMailer_ZMailer, getServerResponse) {

	zval *data = NULL, *str = NULL, *_0, _1, *_8, _3$$3 = zval_used_for_init, _4$$3 = zval_used_for_init, *_5$$3 = NULL, *_6$$3, _7$$3 = zval_used_for_init, *_9$$5;
	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_2 = NULL;

	ZEPHIR_MM_GROW();

	ZEPHIR_INIT_VAR(data);
	ZVAL_STRING(data, "", 1);
	_0 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	ZEPHIR_SINIT_VAR(_1);
	ZVAL_LONG(&_1, 4096);
	ZEPHIR_CALL_FUNCTION(&str, "fgets", &_2, 29, _0, &_1);
	zephir_check_call_status();
	while (1) {
		if (!(zephir_is_true(str))) {
			break;
		}
		zephir_concat_self(&data, str TSRMLS_CC);
		ZEPHIR_SINIT_NVAR(_3$$3);
		ZVAL_LONG(&_3$$3, 3);
		ZEPHIR_SINIT_NVAR(_4$$3);
		ZVAL_LONG(&_4$$3, 1);
		ZEPHIR_INIT_NVAR(_5$$3);
		zephir_substr(_5$$3, str, 3 , 1 , 0);
		if (ZEPHIR_IS_STRING(_5$$3, " ")) {
			break;
		}
		_6$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		ZEPHIR_SINIT_NVAR(_7$$3);
		ZVAL_LONG(&_7$$3, 4096);
		ZEPHIR_CALL_FUNCTION(&str, "fgets", &_2, 29, _6$$3, &_7$$3);
		zephir_check_call_status();
	}
	_8 = zephir_fetch_nproperty_this(this_ptr, SL("debug"), PH_NOISY_CC);
	if (zephir_is_true(_8)) {
		ZEPHIR_INIT_VAR(_9$$5);
		ZEPHIR_CONCAT_VS(_9$$5, data, "<br>");
		zend_print_zval(_9$$5, 0);
	}
	RETURN_CCTOR(data);

}

PHP_METHOD(ZMailer_ZMailer, strip_html_tags) {

	zval *_0, *_2;
	int ZEPHIR_LAST_CALL_STATUS;
	zephir_fcall_cache_entry *_4 = NULL;
	zval *text = NULL, *_1 = NULL, *_3 = NULL, *_5 = NULL;

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &text);

	ZEPHIR_SEPARATE_PARAM(text);


	ZEPHIR_INIT_VAR(_0);
	zephir_create_array(_0, 18, 0 TSRMLS_CC);
	ZEPHIR_INIT_VAR(_1);
	ZVAL_STRING(_1, "@<head[^>]*?>.*?</head>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<style[^>]*?>.*?</style>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<script[^>]*?.*?</script>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<object[^>]*?.*?</object>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<embed[^>]*?.*?</embed>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<applet[^>]*?.*?</applet>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<noframes[^>]*?.*?</noframes>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<noscript[^>]*?.*?</noscript>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<noembed[^>]*?.*?</noembed>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<form[^>]*?.*?</form>@siu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@<((br)|(hr))>@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((address)|(blockquote)|(center)|(del))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((div)|(h[1-9])|(ins)|(isindex)|(p)|(pre))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((dir)|(dl)|(dt)|(dd)|(li)|(menu)|(ol)|(ul))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((table)|(th)|(td)|(caption))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((form)|(button)|(fieldset)|(legend)|(input))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((label)|(select)|(optgroup)|(option)|(textarea))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "@</?((frameset)|(frame)|(iframe))@iu", 1);
	zephir_array_fast_append(_0, _1);
	ZEPHIR_INIT_VAR(_2);
	zephir_create_array(_2, 18, 0 TSRMLS_CC);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, " ", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "\n\$0", 1);
	zephir_array_fast_append(_2, _1);
	ZEPHIR_CALL_FUNCTION(&_3, "preg_replace", &_4, 20, _0, _2, text);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(text, _3);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "/(^[\r\n]*|[\r\n]+)[\\s\t]*[\r\n]+/", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_INIT_VAR(_5);
	ZVAL_STRING(_5, "\n", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_CALL_FUNCTION(&_3, "preg_replace", &_4, 20, _1, _5, text);
	zephir_check_temp_parameter(_1);
	zephir_check_temp_parameter(_5);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(text, _3);
	ZEPHIR_INIT_NVAR(_1);
	ZVAL_STRING(_1, "/\n( )*/", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_INIT_NVAR(_5);
	ZVAL_STRING(_5, "\n", ZEPHIR_TEMP_PARAM_COPY);
	ZEPHIR_CALL_FUNCTION(&_3, "preg_replace", &_4, 20, _1, _5, text);
	zephir_check_temp_parameter(_1);
	zephir_check_temp_parameter(_5);
	zephir_check_call_status();
	ZEPHIR_CPY_WRT(text, _3);
	ZEPHIR_CALL_FUNCTION(&_3, "strip_tags", NULL, 30, text);
	zephir_check_call_status();
	zephir_fast_trim(return_value, _3, NULL , ZEPHIR_TRIM_BOTH TSRMLS_CC);
	RETURN_MM();

}

PHP_METHOD(ZMailer_ZMailer, debug) {

	

	if (1) {
		zephir_update_property_this(this_ptr, SL("debug"), ZEPHIR_GLOBAL(global_true) TSRMLS_CC);
	} else {
		zephir_update_property_this(this_ptr, SL("debug"), ZEPHIR_GLOBAL(global_false) TSRMLS_CC);
	}

}

PHP_METHOD(ZMailer_ZMailer, __destruct) {

	zval *_0, *_1$$3, *_2$$3, *_3$$3, *_4$$3;
	int ZEPHIR_LAST_CALL_STATUS;

	ZEPHIR_MM_GROW();

	_0 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
	if (zephir_is_true(_0)) {
		_1$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		_2$$3 = zephir_fetch_nproperty_this(this_ptr, SL("newline"), PH_NOISY_CC);
		ZEPHIR_INIT_VAR(_3$$3);
		ZEPHIR_CONCAT_SV(_3$$3, "QUIT", _2$$3);
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "sendserver", NULL, 4, _1$$3, _3$$3);
		zephir_check_call_status();
		ZEPHIR_CALL_METHOD(NULL, this_ptr, "getserverresponse", NULL, 3);
		zephir_check_call_status();
		_4$$3 = zephir_fetch_nproperty_this(this_ptr, SL("conn"), PH_NOISY_CC);
		zephir_fclose(_4$$3 TSRMLS_CC);
	}
	ZEPHIR_MM_RESTORE();

}

zend_object_value zephir_init_properties_ZMailer_ZMailer(zend_class_entry *class_type TSRMLS_DC) {

		zval *_0, *_2, *_4, *_6, *_1$$3, *_3$$4, *_5$$5, *_7$$6;

		ZEPHIR_MM_GROW();
	
	{
		zval *this_ptr = NULL;
		ZEPHIR_CREATE_OBJECT(this_ptr, class_type);
		_0 = zephir_fetch_nproperty_this(this_ptr, SL("attachments"), PH_NOISY_CC);
		if (Z_TYPE_P(_0) == IS_NULL) {
			ZEPHIR_INIT_VAR(_1$$3);
			array_init(_1$$3);
			zephir_update_property_this(this_ptr, SL("attachments"), _1$$3 TSRMLS_CC);
		}
		_2 = zephir_fetch_nproperty_this(this_ptr, SL("bcc"), PH_NOISY_CC);
		if (Z_TYPE_P(_2) == IS_NULL) {
			ZEPHIR_INIT_VAR(_3$$4);
			array_init(_3$$4);
			zephir_update_property_this(this_ptr, SL("bcc"), _3$$4 TSRMLS_CC);
		}
		_4 = zephir_fetch_nproperty_this(this_ptr, SL("cc"), PH_NOISY_CC);
		if (Z_TYPE_P(_4) == IS_NULL) {
			ZEPHIR_INIT_VAR(_5$$5);
			array_init(_5$$5);
			zephir_update_property_this(this_ptr, SL("cc"), _5$$5 TSRMLS_CC);
		}
		_6 = zephir_fetch_nproperty_this(this_ptr, SL("recipients"), PH_NOISY_CC);
		if (Z_TYPE_P(_6) == IS_NULL) {
			ZEPHIR_INIT_VAR(_7$$6);
			array_init(_7$$6);
			zephir_update_property_this(this_ptr, SL("recipients"), _7$$6 TSRMLS_CC);
		}
		ZEPHIR_MM_RESTORE();
		return Z_OBJVAL_P(this_ptr);
	}

}

