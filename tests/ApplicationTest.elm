module ApplicationTest exposing (suite)

import Test exposing (..)
import Expect exposing (..)

suite : Test
suite =
    describe "The Application"
        [ test "it works" <|
            \_ ->
                Expect.equal True True

        -- Expect.equal is designed to be used in pipeline style, like this.
        , test "it fails" <|
            \_ ->
                Expect.equal True False
        ]
