import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class AnyTest {

    @Test
    void it_fails() {
        assertThat(false).isTrue();
    }
}
