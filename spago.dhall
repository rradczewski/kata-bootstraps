{ name = "kata-bootstrap"
, dependencies = [ "aff", "console", "effect", "prelude", "spec" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs", "test/**/*.purs" ]
}
