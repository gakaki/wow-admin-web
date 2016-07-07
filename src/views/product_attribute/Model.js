export const attribute={
    common:{
        code        :   null,
        name        :   null,
        required    :   1,
        disabled    :   1
    },
    input:{
        minLength   :   null,
        maxLength   :   null
    },
    textarea:{
        minLength   :   null,
        maxLength   :   null,
    },
    select:{
        option:[]
    },
    checkbox:{
        add:{
            value   :   null
        },
        value:[
            '多选项卡1',
            '多选项卡2'
        ]
    },
    numerical:{
        currency        :   1,
        decimalPoint    :   0,
        Unit            :   null,
    },
    date:{
        dateType    :   'data'
    }
}
