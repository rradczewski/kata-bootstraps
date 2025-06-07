import Test.Hspec

main :: IO ()
main = hspec $ do
  describe "application" $ do
    it "works" $ do
        True `shouldBe` True
    it "fails" $ do
        True `shouldBe` False
    