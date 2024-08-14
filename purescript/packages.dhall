-- renovate: datasource=github-releases depName=purescript/package-sets versioning=regex:^psc-?(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)?-(?<build>\d+)$
let upstream = https://github.com/purescript/package-sets/releases/download/psc-0.15.15-20240814/packages.dhall

in  upstream
