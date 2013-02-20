require 'RMagick'
include Magick

class EntriesController < ApplicationController
  before_filter :authenticate_user!, :only => [:index, :destroy, :edit, :update]
  # GET /entries
  # GET /entries.json
  def index
    @entries = Entry.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @entries }
    end
  end

  # GET /entries/1
  # GET /entries/1.json
  def show
    @vote = Vote.new
    @show_submit = true
    @entry = Entry.find(params[:id], :include => :category)

    d=@entry.image_url.to_s

    img =  Magick::Image.read(@entry.image_url.to_s).first
    thumb = img.resize(100, 100)

    #image = MiniMagick::Image.open(@entry.image_url.to_s)
    #image.resize "100x100"
    #image.write  "output.jpg"

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @entry }
    end
  end

  # GET /entries/new
  # GET /entries/new.json
  def new
    @entry = Entry.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @entry }
    end
  end

  # GET /entries/1/edit
  def edit
    @entry = Entry.find(params[:id])
  end

  # POST /entries
  # POST /entries.json
  def create
    @entry = Entry.new(params[:entry])
    @entry.ip = request.remote_ip



    respond_to do |format|
      if @entry.save
        format.html { redirect_to @entry, notice: 'Entry was successfully created.' }
        format.json { render json: @entry, status: :created, location: @entry }
      else
        format.html { render action: "new" }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /entries/1
  # PUT /entries/1.json
  def update
    @entry = Entry.find(params[:id])

    respond_to do |format|
      if @entry.update_attributes(params[:entry])
        format.html { redirect_to @entry, notice: 'Entry was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @entry.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /entries/1
  # DELETE /entries/1.json
  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy

    respond_to do |format|
      format.html { redirect_to entries_url }
      format.json { head :no_content }
    end
  end

  def vote

    @vote = Vote.new(params[:vote])
    @vote.ip = request.remote_ip

    @entry = Entry.find(params[:id])
    @vote.entry_id = @entry.id

    if @vote.save
      @entry.add_evaluation(:votes, 1, @vote)
      flash[:notice] = "Thanks for voting!"
      redirect_to :action => :show, :id => @entry.id
    else
      render :action => :show
    end
  end
end
