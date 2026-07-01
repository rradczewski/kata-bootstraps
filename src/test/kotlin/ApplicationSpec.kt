import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.shouldBe

class ApplicationSpec :
        StringSpec({
            "it should fail" { true shouldBe false }

            "it should succeed" { true shouldBe true }
        })
