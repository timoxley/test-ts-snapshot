import { writeHeapSnapshot } from 'v8'
import { basename } from 'path'
const name = process.env.npm_lifecycle_event || basename(process.argv[0])
console.log(name, '>>')
console.time(name)
console.log(writeHeapSnapshot())
console.timeEnd(name)
console.log(name, '<<')
