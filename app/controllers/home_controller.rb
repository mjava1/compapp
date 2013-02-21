class HomeController < ApplicationController
  def index

    @entries = Entry.all(:order =>"created_at DESC")
    @show_comp_desc = true
    @show_submit = true
  end
end