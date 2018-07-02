# rubocop-config-coverhound

CoverHound style guides and shared style configs.

## Installation

Add this line to your application's Gemfile:

```ruby
group :test, :development do
  gem "rubocop-config-coverhound"
end
```
Or, for a Ruby library, add this to your gemspec:

```rb
spec.add_development_dependency "rubocop-config-coverhound"
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install rubocop-config-coverhound

## Usage

Create a `.rubocop.yml` with the following directives:

```yaml
inherit_gem:
  rubocop-config-coverhound: default.yml
```

Now, run:

```bash
$ bundle exec rubocop
```

You do not need to include `rubocop` directly in your application's dependences.
`rubocop-config-coverhound` will include a specific version of `rubocop` that is shared across
all projects.

## Versioning

We are pegging our major versions to Rubocop minor versions. Rubop patch
versions would indicate a minor version bump for us. A patch for us would
indicate a change only for us, not in our upstream dependencies.
