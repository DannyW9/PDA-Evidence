require('minitest/autorun')
require('minitest/rg')
require_relative('testing_task_2.rb')
require('pry-byebug')

class Test < MiniTest::Test

  def setup()
    @card1 = Card.new('Hearts', 1)
    @card2 = Card.new('Diamonds', 9)
    @cards = [@card1, @card2]
    @cardGame = CardGame.new()
  end

def test_card_suit()
  assert_equal('Hearts', @card1.suit)
end

def test_card_value()
  assert_equal(1, @card1.value)
end

def test_check_for_ace()
  assert_equal(true, @cardGame.check_for_ace(@card1))
end

def test_check_for_non_ace()
  assert_equal(false, @cardGame.check_for_ace(@card2))
end

def test_highest_card()
  assert_equal(@card2, @cardGame.highest_card(@card1, @card2))
end

def test_cards_total()
  assert_equal("You have a total of 10", @cardGame.cards_total(@cards))
end

end
