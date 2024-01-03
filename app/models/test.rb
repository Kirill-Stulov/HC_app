require 'httparty'
require 'mechanize'

class Email

  def initialize
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
      # from = row.at_css('td[nowrap]')
      # subject = row.at_css('td[nowrap] h1 a')
      subject = row.at_css("a:contains('#{@id}')")

      # from_contains_hcpowertrain = from && from.text.include?('hcpowertrain')
      subject_contains_id = subject && subject.text.include?(@id)

      # from_contains_hcpowertrain && subject_contains_hc_test3
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
