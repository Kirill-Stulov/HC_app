class ScheduleController < ApplicationController
  def index
    @schedules = Schedule.all
  end
  
  def new
   @schedule = Schedule.new
  end
  
  def create
    @schedule = Schedule.new(schedule_params)
    if @schedule.save
      redirect_to schedule_path(@schedule)
    else
      render :new
    end
  end
  
  def edit
    @schedule = Schedule.find(params[:id])
  end
  
  def update
    @schedule = Schedule.find(params[:id])
    if @schedule.update(schedule_params)
      redirect_to schedule_path(@schedule)
    else
      render :edit
    end
  end

  def save
    # Add your logic for saving the schedule
  end

  def show
   @schedule = Schedule.find(params[:id])
  end

  def destroy
    @schedule = Schedule.find(params[:id])
    @schedule.destroy
    redirect_to schedules_path
  end
  
  private
  
  def schedule_params
    params.require(:schedule).permit(:title, :description, :start_time, :end_time)
  end
end
