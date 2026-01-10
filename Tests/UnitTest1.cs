namespace Tests;

using FluentAssertions;

public class UnitTest1
{
    [Fact]
    public void Test_Fails()
    {
        true.Should().BeFalse();
    }

    [Fact]
    public void Test_Succeeds()
    {
        true.Should().BeTrue();
    }
}