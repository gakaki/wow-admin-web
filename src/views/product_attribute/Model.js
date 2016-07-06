export const attribute={
    common:{
        code        :   null,
        name        :   null,
        required    :   false,
        disabled    :   true
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
        add:{
            value       :   null,
            selected    :   true
        },
        option:[
            // {value:'选项一',selected:true}
        ]
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
        currency        :   false,
        decimalPoint    :   0,
        Unit            :   null,
    },
    date:{
        dateType    :   'data'
    }
}
