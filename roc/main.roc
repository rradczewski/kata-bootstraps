app [main] { 
    # TODO: Renovate this
    pf: platform "https://github.com/roc-lang/basic-cli/releases/download/0.12.0/Lb8EgiejTUzbggO2HVVuPJFkwvvsfW6LojkLR20kTVE.tar.br" 
}

import pf.Stdout

main = Stdout.line "Hello, World!"

expect Bool.true == Bool.true
expect Bool.false == Bool.true