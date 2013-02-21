# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) are set in the file config/application.yml.
# See http://railsapps.github.com/rails-environment-variables.html
puts 'ROLES'
roles = ["admin", "user", "VIP"]
roles.each do |role|
  Role.find_or_create_by_name({ :name => role }, :without_protection => true)
  puts 'role: ' << role
end
puts 'DEFAULT USERS'

adminUserName = "admin"
adminEmail = "admin@promoki.com"
adminPassword = "welcome"

user = User.find_or_create_by_email :name => adminUserName, :email => adminEmail, :password => adminPassword, :password_confirmation => adminPassword
puts 'user: ' << user.name
user.add_role :admin

puts 'CAMPAIGN TYPES'
campaign_types = ["Brand Awareness", "Collaborative Media"]
campaign_types.each do |campaign|
  CampaignType.find_or_create_by_name({ :name => campaign }, :without_protection => true)
  puts 'campaign type: ' << campaign
end
