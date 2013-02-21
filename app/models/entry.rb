class Entry < ActiveRecord::Base
  attr_accessible :caption, :email, :image, :name
  validates :caption, :length => { :maximum => 140}
  validates_uniqueness_of :email
  validates_presence_of :caption, :email, :image, :name
  validates_email_format_of :email

  mount_uploader :image, ImageUploader

  before_validation :downcase_email

  def downcase_email
    self.email = self.email.downcase if self.email.present?
  end
end