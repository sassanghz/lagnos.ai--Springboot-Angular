package com.example.backend.config;

import org.hibernate.dialect.Dialect;
import org.hibernate.dialect.function.StandardSQLFunction;
import org.hibernate.dialect.function.SQLFunctionTemplate;
import org.hibernate.dialect.function.VarArgsSQLFunction;
import org.hibernate.type.StringType;
import org.hibernate.type.StandardBasicTypes;

import java.sql.Types;

public class SQLiteDialect extends Dialect {
    public SQLiteDialect() {
        super();

        // Register column types
        registerColumnType(Types.INTEGER, "integer");
        registerColumnType(Types.VARCHAR, "varchar");
        registerColumnType(Types.BLOB, "blob");
        registerColumnType(Types.BOOLEAN, "integer");
        registerColumnType(Types.TIMESTAMP, "timestamp");

        // Register SQLite functions
        registerFunction("concat", new VarArgsSQLFunction(StringType.INSTANCE, "", "||", ""));
        registerFunction("mod", new SQLFunctionTemplate(StandardBasicTypes.INTEGER, "?1 % ?2"));
        registerFunction("substr", new StandardSQLFunction("substr", StringType.INSTANCE));
        registerFunction("substring", new StandardSQLFunction("substr", StringType.INSTANCE));
    }
}