module ApplicationHelper
  # The get_person_duty method you provided takes two arguments: date and person. 
  # The method is intended to retrieve the duty of the specified person on the given date. 
  # However, the specific logic for retrieving this information is not provided 
  # in the method definition.

  # To complete the code for this method, you will need to add your own logic for 
  # retrieving the person’s duty on the given date. This will depend on how your application 
  # stores and retrieves data.

  # Here is an example of how you might complete the code for this method:

  def get_person_duty(date, person)
    # Assuming you have a Schedule model with a date attribute and a person attribute
    schedule = Schedule.find_by(date: date, person: person)
    if schedule
      schedule.duty
    else
      "No duty assigned"
    end
  end
  # In this example, we assume that there is a Schedule model with a date attribute 
  # and a person attribute. The method uses the find_by method to search for a Schedule 
  # record that matches the given date and person. If a matching record is found, 
  # the method returns the value of the duty attribute for that record. If no matching 
  # record is found, the method returns the string "No duty assigned".

  # This is just one example of how you might complete the code for this method. 
  # You will need to adapt it to fit the specific needs of your application.
end

