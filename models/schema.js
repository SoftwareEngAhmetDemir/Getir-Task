
const recordsSchema = { 
    key:{
        type: String,
        required: false,
        default:''
    },
    createdAt: {
        type: Date,
        required: true,
        default : Date.now
    },
    counts: {
        type: Array,
        required: true,
        default:![]
    },
    value:{
        type: String,
        required: true,
        default:''
    }
}

export default recordsSchema;