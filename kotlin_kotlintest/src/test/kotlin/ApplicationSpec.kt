import io.kotlintest.shouldBe
import io.kotlintest.specs.StringSpec

class ApplicationSpec : StringSpec() { init {
    "it should fail" {
        true shouldBe false
    }

    "it should succeed" {
        true shouldBe true
    }
}}