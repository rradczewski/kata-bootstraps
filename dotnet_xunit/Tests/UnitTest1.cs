namespace Tests;

public class UnitTest1
{
    [Fact]
    public void Test_Fails()
    {
        Assert.True(false);
    }

    [Fact]
    public void Test_Succeeds()
    {
        Assert.True(true);
    }
}