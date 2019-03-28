import { pushCalled, on } from '../helpers'

test("PushCalled test", () => {


  const called = []


  pushCalled(called, "findSomething", function(a) {})("TEST")
  expect(called).toMatchSnapshot()
  expect(on(called, "findSomething", function(a) {})).toEqual("TEST")

  pushCalled(called, "findSomething", (a) => {}, () => "x")("TEST_2")
  expect(called).toMatchSnapshot()


})