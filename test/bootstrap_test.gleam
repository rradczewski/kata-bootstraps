import gleeunit
import gleeunit/should

pub fn main() {
  gleeunit.main()
}

// gleeunit test functions end in `_test`
pub fn successful_test() {
  True
  |> should.equal(True)
}

pub fn failing_test() {
  False
  |> should.equal(True)
}
