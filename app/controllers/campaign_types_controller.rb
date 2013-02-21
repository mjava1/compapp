class CampaignTypesController < ApplicationController
  # GET /campaign_types
  # GET /campaign_types.json
  def index
    @campaign_types = CampaignType.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @campaign_types }
    end
  end

  # GET /campaign_types/1
  # GET /campaign_types/1.json
  def show
    @campaign_type = CampaignType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @campaign_type }
    end
  end

  # GET /campaign_types/new
  # GET /campaign_types/new.json
  def new
    @campaign_type = CampaignType.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @campaign_type }
    end
  end

  # GET /campaign_types/1/edit
  def edit
    @campaign_type = CampaignType.find(params[:id])
  end

  # POST /campaign_types
  # POST /campaign_types.json
  def create
    @campaign_type = CampaignType.new(params[:campaign_type])

    respond_to do |format|
      if @campaign_type.save
        format.html { redirect_to @campaign_type, notice: 'Campaign type was successfully created.' }
        format.json { render json: @campaign_type, status: :created, location: @campaign_type }
      else
        format.html { render action: "new" }
        format.json { render json: @campaign_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /campaign_types/1
  # PUT /campaign_types/1.json
  def update
    @campaign_type = CampaignType.find(params[:id])

    respond_to do |format|
      if @campaign_type.update_attributes(params[:campaign_type])
        format.html { redirect_to @campaign_type, notice: 'Campaign type was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @campaign_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /campaign_types/1
  # DELETE /campaign_types/1.json
  def destroy
    @campaign_type = CampaignType.find(params[:id])
    @campaign_type.destroy

    respond_to do |format|
      format.html { redirect_to campaign_types_url }
      format.json { head :no_content }
    end
  end
end
