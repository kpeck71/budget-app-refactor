module Api::V1
  class GoalsController < ApplicationController
    before_action :set_goal, only: [:show, :update, :destroy]

    # GET /goals
    def index
      @goals = Goal.all

      render json: @goals
    end

    # GET /goals/1
    def show
      render json: @goal
    end

    # POST /goals
    def create
      @goal = Goal.new(goal_params)

      if @goal.save
        render json: @goal, status: :created
      else
        render json: @goal.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /goals/1
    def update
      if @goal.update(goal_params)
        render json: @goal
      else
        render json: @goal.errors, status: :unprocessable_entity
      end
    end

    # DELETE /goals/1
    def destroy
      @goal.destroy
      if @goal.destroy
        head :no_content, status: :ok
      else
        render json: @goal.errors, status: :unprocessable_entity
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_goal
        @goal = Goal.find(params[:id])
      end

      # Only allow a trusted parameter "white goal" through.
      def goal_params
        params.require(:goal).permit(:title, :amount, :description, :amount_paid, :paid)
      end
  end
end
