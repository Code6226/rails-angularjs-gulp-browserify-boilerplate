class HomeController < ApplicationController
  def index
  end

  def numbers
    render json: 3.times.map{ 1000 + Random.rand(8999) } .to_json
  end
end
