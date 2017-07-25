# coverhound-style

CoverHound style guides and shared style configs.

## Installation

Add this line to your application's Gemfile:

```ruby
group :test, :development do
  gem "coverhound-style"
end
```
Or, for a Ruby library, add this to your gemspec:

```rb
spec.add_development_dependency 'percy-style'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install coverhound-style

## Usage

Create a `.rubocop.yml` with the following directives:

```yaml
inherit_gem:
  coverhound-style
    - default.yml
```

Now, run:

```bash
$ bundle exec rubocop
```

You do not need to include rubocop directly in your application's dependences.
Percy-style will include a specific version of `rubocop` that is shared across
all projects.
