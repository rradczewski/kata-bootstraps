#[cfg(test)]
mod tests {
    #[test]
    fn test_should_fail() {
        assert_eq!(false, true);
    }

    #[test]
    fn test_should_succeed() {
        assert_eq!(true, true);
    }
}