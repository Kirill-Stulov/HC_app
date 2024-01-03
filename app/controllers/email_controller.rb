# new instance of the Email class is created in the send_email method 
#  and its object ID is stored in the session. In the check_status method, 
#  the same instance of the Email class is retrieved using its object ID 
#  and the check_status method is called on that instance.

class EmailController < ApplicationController
  def index
  end

  def send_email
    email = Email.new
    session[:email_id] = email.object_id
    email.send_email(params[:to])
    render json: { status: 'success' }
  end

  def check_status
    email = ObjectSpace._id2ref(session[:email_id])
    status = email.check_status(params[:to])
    render json: status 
  end
end

# previous methods, when there was no random unique id of email
#  in subject and send_email and check_status methods were class methods
# 	def send_email
#     Email.send_email(params[:to])
#     render json: { status: 'success' }
#   end
  
# 	def check_status
#     status = Email.check_status(params[:to])
#     # render json: { status: status }
#     render json: status 
#   end
# end
