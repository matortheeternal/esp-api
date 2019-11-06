const IntegerDef = require('./IntegerDef');

class UInt32Def extends IntegerDef {
    read(stream) {
        return stream.read(4).readUInt32LE();
    }

    toBytes(data) {
        let buf = new Buffer(4);
        buf.writeUInt32LE(data);
        return buf;
    }
}

module.exports = Object.assign(UInt32Def, {
    defType: 'uint32',
    ...IntegerDef.getMinAndMaxValues(32, false)
});
