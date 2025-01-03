module Tests

open Xunit

[<Fact>]
let Test1 () =
    Assert.True true

[<Fact>]
let Test2 () =
    Assert.True false
