require 'httparty'
require 'mechanize'

class Email

  def initialize
    # creates random id for each new email subject
    @id = rand(111111..999999).to_s
  end

  def send_email(to)
    api_key = ENV['SENDINBLUE_API_KEY']
    url = 'https://api.sendinblue.com/v3/smtp/email'

    headers = {
      'api-key': api_key,
      'Content-Type': 'application/json'
    }

    body = {
      sender: {
        email: ENV['SENDINBLUE_USERNAME']
      },
      to: [
        {
          email: to
        }
      ],
      subject: "#{@id}",
      htmlContent: '<p>This is a HC external email!</p>'
    }.to_json

    response = HTTParty.post(url, headers: headers, body: body)

    if response.code == 201
      puts 'Email sent successfully'
    else
      puts 'Failed to send email'
    end
  end

  def check_status(to)
    agent = Mechanize.new
    agent.verify_mode = OpenSSL::SSL::VERIFY_NONE

    # Log in to the webmail
    login_page = agent.get('https://10.134.9.108/owa')
    login_form = login_page.form
    login_form.username = ENV['EXCHANGE_USERNAME']
    login_form.password = ENV['EXCHANGE_PASSWORD']
    agent.submit(login_form)

    # Navigate to the Inbox
    inbox_page = agent.get('https://10.134.9.108/owa/#path=/mail/inbox')
    page_title = inbox_page.title
    current_url = agent.current_page.uri.to_s
    page_content = inbox_page.body

    # Parse the inbox page content
    inbox_doc = Nokogiri::HTML(page_content)

    # Find a row containing both 'hcpowertrain' and 'hc_test3'
    matching_row = inbox_doc.css('tr').find do |row|
      subject = row.at_css("a:contains('#{@id}')")
      subject_contains_id = subject && subject.text.include?(@id)
      subject_contains_id
    end

    # Check if a matching row was found
    if matching_row
      status = 'received'
    else
      status = 'not_received'
    end

    { status: status, page_title: page_title, current_url: current_url, page_content: page_content }
  end
end

### !!!!!!!!!!!!!!! #########
# require 'mail'
# require 'httparty'
# require 'mechanize'
# require 'exchanger'

# class Email
#   # ID = rand(111111..999999).to_s
#   # @@id = rand(111111..999999)#.to_s
#   @@id = 0
#   @@all_ids = []
#   # @@all_ids << @@id
#   # @@all_ids.include?(@@id) ? @@id += 1 : @@id = rand(111111..999999)
#   if @@all_ids.include?(@@id)
#     @@id += 1
#     @@all_ids << @@id
#   else
#     @@id = rand(111111..999999)
#   end
    
 
#   # p a ? b : c  #если a true то верни b иначе верни с
  
#   # метод отправки имейла
#   def self.send_email(to)
#     api_key = ENV['SENDINBLUE_API_KEY']
#     url = 'https://api.sendinblue.com/v3/smtp/email'

#     headers = {
#       'api-key': api_key,
#       'Content-Type': 'application/json'
#     }

#     body = {
#       sender: {
#         email: ENV['SENDINBLUE_USERNAME']
#       },
#       to: [
#         {
#           email: to
#         }
#       ],
#       # subject:'hc_test3',
#       # subject: "#{ID}",
#       subject: "#{@@id.to_s}",
#       htmlContent: '<p>This is a HC external email!</p>'
#     }.to_json

#     response = HTTParty.post(url, headers: headers, body: body)

#     if response.code == 201
#       puts 'Email sent successfully'
#     else
#       puts 'Failed to send email'
#     end
#   end

#   # метод проверки что имейл получен
#   def self.check_status(to)
#     agent = Mechanize.new
#     agent.verify_mode = OpenSSL::SSL::VERIFY_NONE

#     # Log in to the webmail
#     login_page = agent.get('https://10.134.9.108/owa')
#     login_form = login_page.form
#     login_form.username = ENV['EXCHANGE_USERNAME']
#     login_form.password = ENV['EXCHANGE_PASSWORD']
#     agent.submit(login_form)

#     # Navigate to the Inbox
#     inbox_page = agent.get('https://10.134.9.108/owa/#path=/mail/inbox')
#     page_title = inbox_page.title
#     current_url = agent.current_page.uri.to_s
#     page_content = inbox_page.body

#     # Parse the inbox page content
#     inbox_doc = Nokogiri::HTML(page_content)

#     # Find a row containing both 'hcpowertrain' and 'hc_test3'
#     matching_row = inbox_doc.css('tr').find do |row|
#       # from = row.at_css('td[nowrap]')
#       # subject = row.at_css('td[nowrap] h1 a')
#       subject = row.at_css("a:contains('#{@@id.to_s}')")

#       # from_contains_hcpowertrain = from && from.text.include?('hcpowertrain')
#       subject_contains_id = subject && subject.text.include?(@@id.to_s)

#       # from_contains_hcpowertrain && subject_contains_hc_test3
#       subject_contains_id
#     end

#     # Check if a matching row was found
#     if matching_row
#       status = 'received'
#     else
#       status = 'not_received'
#     end

#     { status: status, page_title: page_title, current_url: current_url, page_content: page_content }
#   end

#   # def self.check_status(to)
#   #   agent = Mechanize.new
#   #   agent.verify_mode = OpenSSL::SSL::VERIFY_NONE # Use this line only if your server has an invalid SSL certificate
  
#   #   # Log in to the webmail
#   #   login_page = agent.get('https://10.134.9.108/owa')
#   #   login_form = login_page.form
#   #   login_form.username = ENV['EXCHANGE_USERNAME']
#   #   login_form.password = ENV['EXCHANGE_PASSWORD']
#   #   agent.submit(login_form)
  
#   #   # Navigate to the Inbox
#   #   inbox_page = agent.get('https://10.134.9.108/owa/#path=/mail/inbox') # Update the URL as needed
#   #   page_title = inbox_page.title
#   #   # Add the current URL to the response
#   #   current_url = agent.current_page.uri.to_s
#   #   # Add the inbox page content to the response
#   #   page_content = inbox_page.body
  
#   #   # Parse the emails and check for the desired email
#   #   received = false
#   #   emails = []
  
#   #   email_items = inbox_page.css('div[autoid^="_lvv_"]')
#   #   email_items.each do |email_item|
#   #     aria_label = email_item['aria-label']
  
#   #     from_regex = /From (.*?),/
#   #     subject_regex = /Subject (.*?),/
  
#   #     from = from_regex.match(aria_label)[1].strip
#   #     subject = subject_regex.match(aria_label)[1].strip
  
#   #     emails << { from: from, subject: subject }
  
#   #     if from == 'hcpowertrain@gmail.com' && subject == 'hc_test3'
#   #       received = true
#   #       break
#   #     end
#   #   end
  
#   #   { status: (received ? :received : :not_received), emails: emails, page_title: page_title, current_url: current_url, page_content: page_content }
#   # end
# end

# Now, when you run the code and check the browser console, you should see 
# the inbox page content logged along with the other information. 
# Inspect the HTML structure and find the correct CSS selector for the email items. 
# Update the email_items variable in the check_status
# method with the correct CSS selector and test the code again.

  # def self.check_status(to)
  #   agent = Mechanize.new
  #   agent.verify_mode = OpenSSL::SSL::VERIFY_NONE # Use this line only if your server has an invalid SSL certificate

  #   # Log in to the webmail
  #   login_page = agent.get('https://10.134.9.108/owa')
  #   login_form = login_page.form
  #   login_form.username = ENV['EXCHANGE_USERNAME']
  #   login_form.password = ENV['EXCHANGE_PASSWORD']
  #   agent.submit(login_form)

  #   # Navigate to the Inbox
  #   inbox_page = agent.get('https://10.134.9.108/owa/#path=/mail/inbox') # Update the URL as needed

  #   # Parse the emails and check for the desired email
  #   received = false
  #   # one_min = Time.now - 1 * 60

  #   emails = []
  #   inbox_page.search('.email_item').each do |email_item|
  #     from = email_item.at_css('.from').text.strip
  #     # to = email_item.at_css('.to').text.strip
  #     subject = email_item.at_css('.subject').text.strip

  #     emails << { from: from, subject: subject }

  #     if from == 'hcpowertrain@gmail.com' && subject ==  'hc_test3'
  #       received = true
  #       break
  #     end
  #   end

  #   # !!!! проблема в том, что в переменные from и subject ничего не записывается
  #   { status: (received ? :received : :not_received), emails: emails }
  #   # received ? :received : :not_received
  # end

  # def self.check_status(to)
  #   # Configure Exchanger
  #   Exchanger.configure do |config|
  #     # config.endpoint = 'https://outlook.office365.com/ews/exchange.asmx'
  #     # config.endpoint = 'https://webmail.umpt.uz/ews/exchange.asmx' # тут нужно выянсить наш правильный ews (exchange web services) endpoint
  #     config.endpoint = 'https://10.134.9.108/owa'
  #     config.username = ENV['EXCHANGE_USERNAME']
  #     config.password = ENV['EXCHANGE_PASSWORD']
  #     config.debug = false
  #   end
  #   # Find emails in Inbox sent from GMAIL_USERNAME to hc@umpt.uz
  #   folder = Exchanger::Folder.get(:inbox)
  #   emails = folder.items.find(:all, restriction: {
  #     is_equal_to: [
  #       { field_uri: :message_from_email, constant: { value: ENV['SENDINBLUE_USERNAME'] } },
  #       { field_uri: :message_to_email, constant: { value: 'hc@umpt.uz' } }
  #     ]
  #   })
  #   if emails.empty?
  #     :not_received
  #   else
  #     :received
  #   end
  # end
