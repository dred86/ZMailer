
/* This file was generated automatically by Zephir do not modify it! */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <php.h>

#if PHP_VERSION_ID < 50500
#include <locale.h>
#endif

#include "php_ext.h"
#include "zmailer.h"

#include <ext/standard/info.h>

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/globals.h"
#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"



zend_class_entry *zmailer_zmailer_ce;

ZEND_DECLARE_MODULE_GLOBALS(zmailer)

PHP_INI_BEGIN()
	
PHP_INI_END()

static PHP_MINIT_FUNCTION(zmailer)
{
#if PHP_VERSION_ID < 50500
	char* old_lc_all = setlocale(LC_ALL, NULL);
	if (old_lc_all) {
		size_t len = strlen(old_lc_all);
		char *tmp  = calloc(len+1, 1);
		if (UNEXPECTED(!tmp)) {
			return FAILURE;
		}

		memcpy(tmp, old_lc_all, len);
		old_lc_all = tmp;
	}

	setlocale(LC_ALL, "C");
#endif
	REGISTER_INI_ENTRIES();
	ZEPHIR_INIT(ZMailer_ZMailer);

#if PHP_VERSION_ID < 50500
	setlocale(LC_ALL, old_lc_all);
	free(old_lc_all);
#endif
	return SUCCESS;
}

#ifndef ZEPHIR_RELEASE
static PHP_MSHUTDOWN_FUNCTION(zmailer)
{

	zephir_deinitialize_memory(TSRMLS_C);
	UNREGISTER_INI_ENTRIES();
	return SUCCESS;
}
#endif

/**
 * Initialize globals on each request or each thread started
 */
static void php_zephir_init_globals(zend_zmailer_globals *zmailer_globals TSRMLS_DC)
{
	zmailer_globals->initialized = 0;

	/* Memory options */
	zmailer_globals->active_memory = NULL;

	/* Virtual Symbol Tables */
	zmailer_globals->active_symbol_table = NULL;

	/* Cache Enabled */
	zmailer_globals->cache_enabled = 1;

	/* Recursive Lock */
	zmailer_globals->recursive_lock = 0;

	/* Static cache */
	memset(zmailer_globals->scache, '\0', sizeof(zephir_fcall_cache_entry*) * ZEPHIR_MAX_CACHE_SLOTS);


}

static PHP_RINIT_FUNCTION(zmailer)
{

	zend_zmailer_globals *zmailer_globals_ptr = ZEPHIR_VGLOBAL;

	php_zephir_init_globals(zmailer_globals_ptr TSRMLS_CC);
	//zephir_init_interned_strings(TSRMLS_C);

	zephir_initialize_memory(zmailer_globals_ptr TSRMLS_CC);


	return SUCCESS;
}

static PHP_RSHUTDOWN_FUNCTION(zmailer)
{

	

	zephir_deinitialize_memory(TSRMLS_C);
	return SUCCESS;
}

static PHP_MINFO_FUNCTION(zmailer)
{
	php_info_print_box_start(0);
	php_printf("%s", PHP_ZMAILER_DESCRIPTION);
	php_info_print_box_end();

	php_info_print_table_start();
	php_info_print_table_header(2, PHP_ZMAILER_NAME, "enabled");
	php_info_print_table_row(2, "Author", PHP_ZMAILER_AUTHOR);
	php_info_print_table_row(2, "Version", PHP_ZMAILER_VERSION);
	php_info_print_table_row(2, "Build Date", __DATE__ " " __TIME__ );
	php_info_print_table_row(2, "Powered by Zephir", "Version " PHP_ZMAILER_ZEPVERSION);
	php_info_print_table_end();

	DISPLAY_INI_ENTRIES();
}

static PHP_GINIT_FUNCTION(zmailer)
{
	php_zephir_init_globals(zmailer_globals TSRMLS_CC);
}

static PHP_GSHUTDOWN_FUNCTION(zmailer)
{

}


zend_function_entry php_zmailer_functions[] = {
ZEND_FE_END

};

zend_module_entry zmailer_module_entry = {
	STANDARD_MODULE_HEADER_EX,
	NULL,
	NULL,
	PHP_ZMAILER_EXTNAME,
	php_zmailer_functions,
	PHP_MINIT(zmailer),
#ifndef ZEPHIR_RELEASE
	PHP_MSHUTDOWN(zmailer),
#else
	NULL,
#endif
	PHP_RINIT(zmailer),
	PHP_RSHUTDOWN(zmailer),
	PHP_MINFO(zmailer),
	PHP_ZMAILER_VERSION,
	ZEND_MODULE_GLOBALS(zmailer),
	PHP_GINIT(zmailer),
	PHP_GSHUTDOWN(zmailer),
	NULL,
	STANDARD_MODULE_PROPERTIES_EX
};

#ifdef COMPILE_DL_ZMAILER
ZEND_GET_MODULE(zmailer)
#endif
