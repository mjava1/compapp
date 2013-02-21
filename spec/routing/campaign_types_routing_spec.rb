require "spec_helper"

describe CampaignTypesController do
  describe "routing" do

    it "routes to #index" do
      get("/campaign_types").should route_to("campaign_types#index")
    end

    it "routes to #new" do
      get("/campaign_types/new").should route_to("campaign_types#new")
    end

    it "routes to #show" do
      get("/campaign_types/1").should route_to("campaign_types#show", :id => "1")
    end

    it "routes to #edit" do
      get("/campaign_types/1/edit").should route_to("campaign_types#edit", :id => "1")
    end

    it "routes to #create" do
      post("/campaign_types").should route_to("campaign_types#create")
    end

    it "routes to #update" do
      put("/campaign_types/1").should route_to("campaign_types#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/campaign_types/1").should route_to("campaign_types#destroy", :id => "1")
    end

  end
end
