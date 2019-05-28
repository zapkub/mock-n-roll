import { pushCalled, on, Any } from '../helpers'

test("PushCalled test", () => {


  const called = []


  pushCalled(called, "findSomething", function(a) {})("TEST")
  expect(called).toMatchSnapshot()

  expect(on(called, "findSomething", function(a) {})).toEqual("TEST")

  pushCalled(called, "findSomethingAny", function(a) {}, Any)("TEST")
  expect(on(called, "findSomethingAny", function(a) {}, "PUFF")).toEqual("TEST")

  pushCalled(called, "findSomething", (a) => {}, () => "x")("TEST_2")
  expect(called).toMatchSnapshot()


  pushCalled(called, "findSomethingAny", Any, Any)("TEST")
  expect(on(called, "findSomethingAny", 8, "PUFF")).toEqual("TEST")



})