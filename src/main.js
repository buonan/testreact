function main(o) {
  console.log('Hello, world!')
  if (o?.doit) {
    console.log("true")
  } else {
    console.log("false")
  }
  return o?.doit
}

export default main