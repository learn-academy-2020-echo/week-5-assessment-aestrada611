# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.
class Bike
 attr_accessor :speed, :bell, :wheels
#need to do more research on attr_accessor and when its necessary
#i feel like it is needed when it the key is not gonna be taken in as the argument and will be manipulated in another way. If you will change it with resassining of the variable it seems fine like for bell but it seems to matter for speed because a
#makes sense now
  def initialize(model, wheels, frame_size)
    @model = model
    @wheels = wheels
    @frame_size = frame_size
    @bell = "doesn't rings"
    @speed = 0
  end

  def show_bike_info
    @model
    @wheels
    @frame_size
  end

  def print_bike_info
    "This #{ @model } bike has #{ @wheels } wheels and a #{ @frame_size }. The bell #{ @bell }."
  end

  def bell_ringer
    @bell = "rings"
  end

  def pedal_faster
    @speed = @speed + 5
  end

  def pedal_slower
    if @speed >= 5
      @speed = @speed - 5
    elsif @speed < 5
      @speed = 0
    end
  end
end



# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'

# I have to make a new instance of the class bike
# I must also make a function that will print the bike info

my_bike = Bike.new('Trek', 2, '168cm frame')

p my_bike.print_bike_info

p my_bike.bell
p my_bike.wheels


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.


# Must make a method that will change from off to on when being called

p my_bike.print_bike_info
my_bike.bell_ringer
p my_bike.print_bike_info
p my_bike.bell_ringer


# Expected output example: my_bike.ring_bell => 'Ding ding!'


# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.

# The speedometer will start at 0 and must be set bellow the initializer

# Expected output example: my_bike.speed => 0
p my_bike.speed

# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.

# Each time the pedal_faster method is called it will increase by 5

my_bike.pedal_faster
my_bike.pedal_faster



# Expected output example: my_bike.pedal_faster 10 => 10

p my_bike.speed

# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.

# gives ablility to slow bike down by 5 by calling pedal_slower method and is set not go below 0

my_bike.pedal_faster
my_bike.pedal_faster

p my_bike.speed



# Expected output example: my_bike.brake 15 => 0

my_bike.pedal_slower
p my_bike.speed

my_bike.pedal_slower
p my_bike.speed

my_bike.pedal_slower
p my_bike.speed

my_bike.pedal_slower
p my_bike.speed

my_bike.pedal_slower
p my_bike.speed
