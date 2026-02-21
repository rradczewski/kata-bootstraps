import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class AnyTest {

    @Test
    void it_fails() {
        assertThat(false).isTrue();
    }

    @Test
    void it_succeeds() {
        assertThat(true).isTrue();
    }
}
