class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def loggedIn
    render 'loggedIn'
  end
end
